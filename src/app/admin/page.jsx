'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileText, CheckCircle, Edit3, Plus, ArrowRight, BookOpen } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ total: 0, published: 0, drafts: 0 });
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const res = await fetch('/api/admin/blogs?limit=100');
        const json = await res.json();
        if (json.success) {
          const allBlogs = json.data;
          const published = allBlogs.filter((b) => b.status === 'Published').length;
          const drafts = allBlogs.filter((b) => b.status === 'Draft').length;
          
          setStats({
            total: json.pagination.total,
            published,
            drafts,
          });
          setLatestBlogs(allBlogs.slice(0, 3));
        }
      } catch (err) {
        console.error('Error fetching dashboard stats:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-10 h-10 border-4 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Block */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 font-satoshi">Welcome back, Administrator</h2>
          <p className="text-gray-500 text-sm mt-1 font-light">
            Manage your blog posts, write updates, and view analytics for the Reliant Elevators blog section.
          </p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="flex items-center gap-2 bg-[#C10510] hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-2xl transition-all duration-300 text-sm shadow-md hover:shadow-lg flex-shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>New Blog Post</span>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stat 1 */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Total Articles</span>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-2 font-satoshi">{stats.total}</h3>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Published Articles</span>
            <h3 className="text-3xl font-extrabold text-emerald-600 mt-2 font-satoshi">{stats.published}</h3>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <CheckCircle className="w-6 h-6" />
          </div>
        </div>

        {/* Stat 3 */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Draft Articles</span>
            <h3 className="text-3xl font-extrabold text-amber-600 mt-2 font-satoshi">{stats.drafts}</h3>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
            <Edit3 className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Grid: Latest Articles & Quick Links */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Latest Blogs */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-xs p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 font-satoshi">Latest Articles</h3>
            <Link
              href="/admin/blogs"
              className="text-sm font-semibold text-[#376378] hover:text-[#C10510] flex items-center gap-1 transition-colors duration-200"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          {latestBlogs.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-gray-100 rounded-2xl">
              <FileText className="w-12 h-12 text-gray-350 mx-auto mb-3" />
              <p className="text-gray-400 text-sm font-light">No articles written yet.</p>
              <Link href="/admin/blogs/new" className="text-sm text-[#C10510] font-semibold mt-2 inline-block hover:underline">
                Write your first post
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {latestBlogs.map((blog) => (
                <div key={blog._id} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm md:text-base truncate font-satoshi">{blog.title}</h4>
                    <div className="flex items-center space-x-3 text-xs text-gray-400 mt-1.5 font-light">
                      <span>By {blog.author}</span>
                      <span>•</span>
                      <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${
                      blog.status === 'Published'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                        : 'bg-amber-50 text-amber-700 border-amber-100'
                    }`}
                  >
                    {blog.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xs p-6 md:p-8 space-y-6">
          <h3 className="text-lg font-bold text-gray-900 font-satoshi">Quick Actions</h3>
          <div className="flex flex-col gap-3">
            <Link
              href="/admin/blogs/new"
              className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-150 transition-all duration-200 group"
            >
              <div>
                <span className="font-bold text-sm block text-gray-800">Add Blog Post</span>
                <span className="text-xs text-gray-400 font-light mt-0.5 block">Create a new article</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/admin/blogs"
              className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-150 transition-all duration-200 group"
            >
              <div>
                <span className="font-bold text-sm block text-gray-800">Manage Articles</span>
                <span className="text-xs text-gray-400 font-light mt-0.5 block">Edit, Publish or Delete</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/blog"
              className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-150 transition-all duration-200 group"
            >
              <div>
                <span className="font-bold text-sm block text-gray-800">View Public Blog</span>
                <span className="text-xs text-gray-400 font-light mt-0.5 block">Visit the live blog page</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
