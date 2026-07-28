'use client';

import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Upload, Loader, HelpCircle, Eye, Edit, X } from 'lucide-react';
import RichTextEditor from '@/components/admin/RichTextEditor';

export default function EditBlog({ params }) {
  const router = useRouter();
  const { id } = use(params);
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [activeTab, setActiveTab] = useState('write'); // 'write' or 'preview'
  
  // Tag state
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);

  // Form State
  const [form, setForm] = useState({
    title: '',
    slug: '',
    shortDescription: '',
    content: '',
    category: 'Home Lifts',
    metaTitle: '',
    metaDescription: '',
    author: '',
    publishDate: '',
    status: 'Draft',
    featuredImage: '',
    featuredImageAlt: '',
    canonicalUrl: '',
    schemaMarkup: ''
  });

  useEffect(() => {
    async function loadBlogDetails() {
      try {
        const res = await fetch(`/api/admin/blogs/${id}`);
        const json = await res.json();
        if (json.success) {
          const blog = json.data;
          setForm({
            title: blog.title || '',
            slug: blog.slug || '',
            shortDescription: blog.shortDescription || '',
            content: blog.content || '',
            category: blog.category || 'Home Lifts',
            metaTitle: blog.metaTitle || '',
            metaDescription: blog.metaDescription || '',
            author: blog.author || '',
            publishDate: blog.publishDate ? new Date(blog.publishDate).toISOString().split('T')[0] : '',
            status: blog.status || 'Draft',
            featuredImage: blog.featuredImage || '',
            featuredImageAlt: blog.featuredImageAlt || '',
            canonicalUrl: blog.canonicalUrl || '',
            schemaMarkup: blog.schemaMarkup || ''
          });
          setTags(blog.tags || []);
        } else {
          alert(json.error || 'Failed to fetch article details');
          router.push('/admin/blogs');
        }
      } catch (err) {
        console.error('Error fetching blog details:', err);
        alert('Error loading blog details');
        router.push('/admin/blogs');
      } finally {
        setLoading(false);
      }
    }
    if (id) {
      loadBlogDetails();
    }
  }, [id, router]);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    
    // Auto-generate slug from title if title is being changed
    if (name === 'title') {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setForm(prev => ({ ...prev, title: value, slug: generatedSlug }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddTag = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const cleaned = tagInput.trim().replace(/,$/, '');
      if (cleaned && !tags.includes(cleaned)) {
        setTags([...tags, cleaned]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData
      });
      const json = await res.json();
      if (json.success) {
        setForm(prev => ({ ...prev, featuredImage: json.url }));
      } else {
        alert(json.error || 'Failed to upload image');
      }
    } catch (err) {
      console.error(err);
      alert('Error uploading image');
    } finally {
      setUploading(false);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.featuredImage) {
      alert('Please upload a featured image before submitting.');
      return;
    }

    setSaving(true);
    try {
      let finalTags = [...tags];
      if (tagInput.trim()) {
        const cleaned = tagInput.trim().replace(/,$/, '');
        if (cleaned && !finalTags.includes(cleaned)) {
          finalTags.push(cleaned);
        }
      }

      const payload = { ...form, tags: finalTags };
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (json.success) {
        router.push('/admin/blogs');
      } else {
        alert(json.error || 'Failed to update blog post');
      }
    } catch (err) {
      console.error(err);
      alert('Error saving post changes');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-10 h-10 border-4 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-fade-in pb-16">
      {/* Back Link Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/admin/blogs"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-[#C10510] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Manage Blogs</span>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Form Fields (8 Columns) */}
        <div className="lg:col-span-8 bg-white border border-gray-155 rounded-3xl p-6 md:p-8 shadow-xs space-y-6">
          <h3 className="text-lg font-bold text-gray-900 font-satoshi pb-3 border-b border-gray-100">
            Edit Post Details
          </h3>

          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Title *</label>
            <input
              type="text"
              name="title"
              required
              value={form.title}
              onChange={handleTextChange}
              placeholder="e.g. Elevating Standards: Safety Systems Explained"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-800 transition-all text-sm font-satoshi"
            />
          </div>

          {/* Slug */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Slug (URL endpoint) *</label>
            <input
              type="text"
              name="slug"
              required
              value={form.slug}
              onChange={handleTextChange}
              placeholder="auto-generated-from-title"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-800 transition-all text-sm font-mono"
            />
          </div>

          {/* Short Description */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Short Description *</label>
            <textarea
              name="shortDescription"
              required
              value={form.shortDescription}
              onChange={handleTextChange}
              rows="3"
              placeholder="Summarize your article in 2-3 sentences..."
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-800 transition-all text-sm font-satoshi"
            />
          </div>

          {/* Rich Content Area */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-700">Full Content (HTML Supported) *</label>
              
              {/* Tab Selector */}
              <div className="flex bg-gray-100 rounded-lg p-0.5 border border-gray-200 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('write')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-md transition-colors ${activeTab === 'write' ? 'bg-white text-gray-800 shadow-xs font-semibold' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  <Edit className="w-3.5 h-3.5" />
                  <span>Write</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-md transition-colors ${activeTab === 'preview' ? 'bg-white text-gray-800 shadow-xs font-semibold' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>
              </div>
            </div>

            {activeTab === 'write' ? (
              <RichTextEditor
                value={form.content}
                onChange={(value) => setForm(prev => ({ ...prev, content: value }))}
                placeholder="Draft your full article layout. Use formatting tools above to structure headings, lists, quotes, tables, and paragraphs..."
              />
            ) : (
              <div className="border border-gray-200 rounded-xl p-5 bg-[#fafafa] min-h-[300px] prose prose-sm max-w-none font-satoshi overflow-y-auto leading-relaxed">
                {form.content ? (
                  <div dangerouslySetInnerHTML={{ __html: form.content }} />
                ) : (
                  <p className="text-gray-400 font-light italic">Nothing to preview yet. Start typing under the Write tab!</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Options & Actions (4 Columns) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Main Action Block */}
          <div className="bg-white border border-gray-155 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="font-bold text-gray-900 font-satoshi">Publish Options</h4>
            
            {/* Status Select */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleTextChange}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-sm font-satoshi"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>

            {/* Category Select */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleTextChange}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-sm font-satoshi"
              >
                <option value="Home Lifts">Home Lifts</option>
                <option value="Commercial Lifts">Commercial Lifts</option>
                <option value="Escalators">Escalators</option>
                <option value="Technology">Technology</option>
                <option value="Safety">Safety</option>
                <option value="Sustainability">Sustainability</option>
                <option value="Business">Business</option>
              </select>
            </div>

            {/* Author */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Author</label>
              <input
                type="text"
                name="author"
                required
                value={form.author}
                onChange={handleTextChange}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-sm font-satoshi"
              />
            </div>

            {/* Publish Date */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Publish Date</label>
              <input
                type="date"
                name="publishDate"
                required
                value={form.publishDate}
                onChange={handleTextChange}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-sm font-satoshi"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={saving}
              className="w-full flex items-center justify-center gap-2 bg-[#C10510] hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-sm shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
            >
              {saving && <Loader className="w-4 h-4 animate-spin" />}
              <span>Update Article</span>
            </button>
          </div>

          {/* Featured Image Block */}
          <div className="bg-white border border-gray-155 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="font-bold text-gray-900 font-satoshi">Featured Image *</h4>
            {form.featuredImage ? (
              <div className="space-y-3">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 border border-gray-100 shadow-inner">
                  <Image
                    src={form.featuredImage}
                    alt={form.featuredImageAlt || "Featured Image Preview"}
                    fill
                    className="object-cover"
                    sizes="300px"
                    unoptimized
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setForm(prev => ({ ...prev, featuredImage: '' }))}
                  className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Remove Image
                </button>
              </div>
            ) : (
              <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors flex flex-col justify-center items-center">
                {uploading ? (
                  <div className="py-6 flex flex-col items-center">
                    <Loader className="w-8 h-8 text-gray-400 animate-spin mb-2" />
                    <span className="text-xs text-gray-400 font-light">Uploading to Cloudinary...</span>
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-gray-350 mb-2" />
                    <span className="text-xs text-gray-500 font-medium block">Click to upload image</span>
                    <span className="text-[10px] text-gray-400 font-light mt-1 block">Support PNG, JPG, JPEG</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </>
                )}
              </div>
            )}

            {/* Image Alt Text */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Image Alt Text (SEO)</label>
              <input
                type="text"
                name="featuredImageAlt"
                value={form.featuredImageAlt}
                onChange={handleTextChange}
                placeholder="Descriptive alt text for image SEO..."
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-xs font-satoshi"
              />
            </div>
          </div>

          {/* Tags Chips Block */}
          <div className="bg-white border border-gray-155 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="font-bold text-gray-900 font-satoshi">Tags & Keywords</h4>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Type tag and press Enter..."
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-sm font-satoshi"
              />
              <div className="flex flex-wrap gap-1.5 pt-1">
                {tags.length === 0 ? (
                  <span className="text-xs text-gray-400 italic font-light">No tags added.</span>
                ) : (
                  tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 font-semibold px-2.5 py-0.5 rounded-full text-xs border border-slate-200"
                    >
                      <span>{tag}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="text-slate-400 hover:text-red-500 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* SEO Block */}
          <div className="bg-white border border-gray-155 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="font-bold text-gray-900 font-satoshi flex items-center gap-1.5">
              <span>SEO Optimization</span>
              <HelpCircle className="w-4 h-4 text-gray-300" title="Optional search engine overrides" />
            </h4>

            {/* Meta Title */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Meta Title</label>
              <input
                type="text"
                name="metaTitle"
                value={form.metaTitle}
                onChange={handleTextChange}
                placeholder="Override page title tag"
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-sm font-satoshi"
              />
            </div>

            {/* Meta Description */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Meta Description</label>
              <textarea
                name="metaDescription"
                value={form.metaDescription}
                onChange={handleTextChange}
                rows="3"
                placeholder="Override search snippet description"
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-sm font-satoshi"
              />
            </div>

            {/* Canonical URL */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Canonical URL</label>
              <input
                type="text"
                name="canonicalUrl"
                value={form.canonicalUrl}
                onChange={handleTextChange}
                placeholder="https://reliantelevators.com/blog/your-slug"
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-sm font-satoshi"
              />
              <span className="text-[10px] text-gray-400 block">Leave empty for auto default article URL</span>
            </div>

            {/* Schema Markup (JSON-LD) */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Schema Markup (JSON-LD)</label>
                <button
                  type="button"
                  onClick={() => {
                    const defaultSchema = {
                      "@context": "https://schema.org",
                      "@type": "BlogPosting",
                      "headline": form.title || "Blog Post Title",
                      "description": form.shortDescription || form.metaDescription || "",
                      "image": form.featuredImage ? [form.featuredImage] : [],
                      "author": {
                        "@type": "Person",
                        "name": form.author || "Reliant Team"
                      },
                      "publisher": {
                        "@type": "Organization",
                        "name": "Reliant Elevators"
                      },
                      "datePublished": form.publishDate || new Date().toISOString().split('T')[0]
                    };
                    setForm(prev => ({ ...prev, schemaMarkup: JSON.stringify(defaultSchema, null, 2) }));
                  }}
                  className="text-[11px] text-[#C10510] hover:underline font-semibold cursor-pointer"
                >
                  + Generate Schema
                </button>
              </div>
              <textarea
                name="schemaMarkup"
                value={form.schemaMarkup}
                onChange={handleTextChange}
                rows="4"
                placeholder='{"@context": "https://schema.org", "@type": "BlogPosting", ...}'
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-xs font-mono"
              />
              <span className="text-[10px] text-gray-400 block">Custom JSON-LD schema. Leave empty for standard auto-generated schema.</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
