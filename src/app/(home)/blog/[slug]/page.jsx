import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, ArrowRight, MessageSquare } from 'lucide-react';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';
import bgabout from '@/assests/home/bgabout.svg';

// Force dynamic rendering to handle newly added blogs smoothly without SSR caching issues
export const dynamic = 'force-dynamic';

// Custom category tag styling
const getCategoryColor = (category) => {
  switch (category) {
    case 'Technology': return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'Business': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'Sustainability': return 'bg-teal-50 text-teal-700 border-teal-200';
    case 'Safety': return 'bg-rose-50 text-rose-700 border-rose-200';
    default: return 'bg-amber-50 text-amber-700 border-amber-200';
  }
};

// Generate static params for all published blogs
export async function generateStaticParams() {
  try {
    await connectDB();
    const posts = await Blog.find({ status: 'Published' }).select('slug');
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  await connectDB();
  const post = await Blog.findOne({ slug, status: 'Published' });
  
  if (!post) {
    return {
      title: 'Article Not Found | Reliant Elevators',
      description: 'The requested blog post could not be found.',
    };
  }

  const defaultCanonical = `https://reliantelevators.com/blog/${post.slug}`;
  const canonical = post.canonicalUrl && post.canonicalUrl.trim() ? post.canonicalUrl.trim() : defaultCanonical;

  return {
    title: `${post.metaTitle || post.title} | Reliant Elevators`,
    description: post.metaDescription || post.shortDescription,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.shortDescription,
      url: canonical,
      siteName: 'Reliant Elevators',
      images: [
        {
          url: post.featuredImage,
          alt: post.featuredImageAlt || post.title,
        },
      ],
      type: 'article',
    },
  };
}

// Helper function to process blog HTML content safely on the server
function processBlogContent(content) {
  if (!content) return '';

  let html = content;

  // Auto-fix corrupted URLs starting with /https:// or /http:/
  html = html.replace(/href=["']\/(https?:\/+[^\s"']+)["']/gi, (match, url) => {
    let cleanUrl = url.replace(/^(https?:\/+)/i, 'https://');
    if (cleanUrl.startsWith('https:/') && !cleanUrl.startsWith('https://')) {
      cleanUrl = cleanUrl.replace('https:/', 'https://');
    }
    if (cleanUrl.startsWith('http:/') && !cleanUrl.startsWith('http://')) {
      cleanUrl = cleanUrl.replace('http:/', 'http://');
    }
    return `href="${cleanUrl}"`;
  });

  // Convert internal full domain URLs (reliantelevators.com) to clean relative paths
  html = html.replace(/href=["']https?:\/\/(www\.)?reliantelevators\.com(\/[^"']*)?["']/gi, (match, www, path) => {
    return `href="${path || '/'}"`;
  });

  // Set target and rel attributes on <a> tags
  html = html.replace(/<a\b([^>]*)>/gi, (match, attrs) => {
    const hrefMatch = attrs.match(/href=["']([^"']*)["']/i);
    const href = hrefMatch ? hrefMatch[1] : '';

    const isInternal = !href || href.startsWith('/') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.includes('localhost');

    let cleanAttrs = attrs
      .replace(/\s*target=["']([^"']*)["']/gi, '')
      .replace(/\s*rel=["']([^"']*)["']/gi, '');

    if (isInternal) {
      return `<a ${cleanAttrs} target="_self">`;
    } else {
      return `<a ${cleanAttrs} target="_blank" rel="noopener noreferrer">`;
    }
  });

  return html;
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  await connectDB();
  
  const currentPost = await Blog.findOne({ slug, status: 'Published' });

  if (!currentPost) {
    notFound();
  }

  const sanitizedContent = processBlogContent(currentPost.content || '');

  // Get 3 related posts (excluding current post)
  const relatedPosts = await Blog.find({
    status: 'Published',
    slug: { $ne: slug }
  }).limit(3);

  // Prepare JSON-LD Schema Markup
  let jsonLdSchema = null;
  if (currentPost.schemaMarkup && currentPost.schemaMarkup.trim()) {
    try {
      jsonLdSchema = JSON.parse(currentPost.schemaMarkup);
    } catch (e) {
      console.error('Invalid custom schema markup in blog post:', currentPost.slug, e);
    }
  }

  if (!jsonLdSchema) {
    const articleUrl = currentPost.canonicalUrl && currentPost.canonicalUrl.trim()
      ? currentPost.canonicalUrl.trim()
      : `https://reliantelevators.com/blog/${currentPost.slug}`;

    jsonLdSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: currentPost.title,
      description: currentPost.shortDescription || currentPost.metaDescription,
      image: currentPost.featuredImage ? [currentPost.featuredImage] : [],
      datePublished: currentPost.publishDate,
      dateModified: currentPost.updatedAt || currentPost.publishDate,
      author: {
        '@type': 'Person',
        name: currentPost.author || 'Reliant Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Reliant Elevators',
        logo: {
          '@type': 'ImageObject',
          url: 'https://reliantelevators.com/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': articleUrl,
      },
    };
  }

  return (
    <main className="min-h-screen bg-transparent pt-28 pb-20 font-satoshi" style={{ backgroundImage: `url(${bgabout.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Structured Data JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-[#376378] hover:text-[#C10510] font-satoshi tracking-wider uppercase transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mb-10">
          {/* Category & Tags */}
          <div className="flex flex-wrap gap-2 mb-4 items-center">
            <span className="bg-slate-800 text-white font-semibold px-3 py-1 rounded-full text-xs border border-slate-800 shadow-xs">
              {currentPost.category}
            </span>
            {(Array.isArray(currentPost.tags) 
              ? currentPost.tags 
              : typeof currentPost.tags === 'string' && currentPost.tags.trim() 
                ? currentPost.tags.split(',').map(t => t.trim()).filter(Boolean) 
                : []
            ).map((tag, idx) => (
              <span
                key={idx}
                className="bg-amber-50 text-amber-800 font-medium px-2.5 py-0.5 rounded-full text-xs border border-amber-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-satoshi leading-tight mb-6">
            {currentPost.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center space-x-6 text-sm text-gray-500 font-satoshi font-light">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>{new Date(currentPost.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-400">By</span>
              <span>{currentPost.author}</span>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-8 bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-xs">
            {/* Large Featured Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 shadow-sm bg-gray-50">
              <Image
                src={currentPost.featuredImage || 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=1000&auto=format&fit=crop'}
                alt={currentPost.featuredImageAlt || currentPost.title}
                fill
                priority
                className="object-cover"
                sizes="(max-w-1200px) 100vw, 800px"
                unoptimized
              />
            </div>

            {/* Article Content - Rendered safely as HTML (from Rich Text Editor) */}
            <div 
              className="prose prose-lg max-w-none font-satoshi text-gray-700 leading-relaxed font-light space-y-6 blog-content-body"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          </div>

          {/* Sidebar (Right Column) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Related Posts */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-7 shadow-xs">
              <h3 className="text-lg font-bold text-gray-900 font-satoshi mb-6 pb-3 border-b border-gray-100">
                Related Articles
              </h3>
              {relatedPosts.length === 0 ? (
                <p className="text-xs text-gray-400 italic">No related articles found.</p>
              ) : (
                <div className="space-y-6">
                  {relatedPosts.map((post) => (
                    <div key={post._id} className="group flex items-start space-x-4">
                      {/* Image Thumbnail */}
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-100">
                        <Image
                          src={post.featuredImage || 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=1000&auto=format&fit=crop'}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="64px"
                          unoptimized
                        />
                      </div>
                      {/* Text Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 font-satoshi line-clamp-2 leading-snug group-hover:text-[#C10510] transition-colors duration-200">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h4>
                        <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-satoshi mt-2 font-light">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Consultation CTA Block */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-lg">
              <div className="absolute -right-20 -top-20 w-44 h-44 bg-[#376378]/25 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-44 h-44 bg-[#C10510]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="bg-red-500/10 text-red-400 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-satoshi mb-3">
                  Ready to Elevate Your Building?
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed font-satoshi font-light mb-6">
                  Contact our engineering experts for a personalized, energy-efficient lift or escalator consultation.
                </p>
                <Link href="/reachout" className="group mt-auto inline-flex items-center justify-center w-full bg-[#C10510] hover:bg-red-700 text-white font-semibold py-3 px-5 rounded-2xl transition-all duration-300 gap-2 text-sm shadow-md hover:shadow-lg">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
