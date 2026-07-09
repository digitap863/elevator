'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Plus, Edit2, Trash2, Eye, ChevronLeft, ChevronRight, ToggleLeft, ToggleRight, Loader } from 'lucide-react';

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [togglingId, setTogglingId] = useState(null);
  
  // Deletion Modal State
  const [deleteId, setDeleteId] = useState(null);
  const [deleteTitle, setDeleteTitle] = useState('');
  const [deleting, setDeleting] = useState(false);

  async function fetchBlogs() {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/blogs?page=${page}&limit=8&search=${encodeURIComponent(search)}`);
      const json = await res.json();
      if (json.success) {
        setBlogs(json.data);
        setTotalPages(json.pagination.pages || 1);
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, [page, search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset to page 1 on new search
  };

  const handleTogglePublish = async (id) => {
    setTogglingId(id);
    try {
      const res = await fetch(`/api/admin/blogs/${id}/publish`, {
        method: 'PATCH',
      });
      const json = await res.json();
      if (json.success) {
        // Update local status
        setBlogs(blogs.map(b => b._id === id ? { ...b, status: json.data.status } : b));
      } else {
        alert(json.error || 'Failed to toggle status');
      }
    } catch (err) {
      console.error(err);
      alert('Error updating status');
    } finally {
      setTogglingId(null);
    }
  };

  const openDeleteModal = (id, title) => {
    setDeleteId(id);
    setDeleteTitle(title);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/blogs/${deleteId}`, {
        method: 'DELETE',
      });
      const json = await res.json();
      if (json.success) {
        setDeleteId(null);
        // Refresh local list
        fetchBlogs();
      } else {
        alert(json.error || 'Failed to delete blog post');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting blog post');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top action header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3" />
          <input
            type="text"
            placeholder="Search by title, author, or category..."
            value={search}
            onChange={handleSearchChange}
            className="w-full pl-12 pr-4 py-2.5 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-800 transition-all font-satoshi text-sm"
          />
        </div>

        {/* Add Blog button */}
        <Link
          href="/admin/blogs/new"
          className="flex items-center justify-center gap-2 bg-[#C10510] hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-2xl transition-all duration-300 text-sm shadow-md hover:shadow-lg flex-shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Write Article</span>
        </Link>
      </div>

      {/* Blogs list table container */}
      <div className="bg-white rounded-3xl border border-gray-150 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-xs font-semibold uppercase tracking-wider text-gray-400">
                <th className="py-4 px-6">Image</th>
                <th className="py-4 px-6">Title / Slug</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Author</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-150 text-sm text-gray-700">
              {loading ? (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-gray-400 font-light">
                    <Loader className="w-6 h-6 animate-spin mx-auto mb-2 text-gray-400" />
                    <span>Loading articles...</span>
                  </td>
                </tr>
              ) : blogs.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-gray-400 font-light">
                    No articles found matching filters.
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-gray-50/50 transition-colors">
                    {/* Image */}
                    <td className="py-4 px-6">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 flex-shrink-0">
                        <Image
                          src={blog.featuredImage}
                          alt={blog.title}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                    </td>

                    {/* Title & Slug */}
                    <td className="py-4 px-6 max-w-xs md:max-w-sm">
                      <div className="font-bold text-gray-900 truncate">{blog.title}</div>
                      <div className="text-xs text-gray-400 truncate mt-0.5 font-light font-mono">
                        {blog.slug}
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-6">
                      <span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-0.5 rounded-full text-xs border border-slate-200">
                        {blog.category}
                      </span>
                    </td>

                    {/* Author */}
                    <td className="py-4 px-6 font-light">{blog.author}</td>

                    {/* Status */}
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleTogglePublish(blog._id)}
                        disabled={togglingId === blog._id}
                        className="flex items-center gap-1.5 focus:outline-none disabled:opacity-50 cursor-pointer text-left"
                      >
                        {blog.status === 'Published' ? (
                          <>
                            <ToggleRight className="w-6 h-6 text-emerald-500" />
                            <span className="text-xs font-semibold text-emerald-600">Published</span>
                          </>
                        ) : (
                          <>
                            <ToggleLeft className="w-6 h-6 text-gray-350" />
                            <span className="text-xs font-semibold text-gray-400">Draft</span>
                          </>
                        )}
                      </button>
                    </td>

                    {/* Date */}
                    <td className="py-4 px-6 text-gray-500 font-light">
                      {new Date(blog.publishDate).toLocaleDateString()}
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                      {/* View */}
                      <Link
                        href={`/blog/${blog.slug}`}
                        target="_blank"
                        className="inline-flex p-1.5 rounded-lg text-gray-400 hover:text-slate-900 hover:bg-gray-100 transition-colors"
                        title="View post on live site"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>

                      {/* Edit */}
                      <Link
                        href={`/admin/blogs/edit/${blog._id}`}
                        className="inline-flex p-1.5 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                        title="Edit article"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Link>

                      {/* Delete */}
                      <button
                        onClick={() => openDeleteModal(blog._id, blog.title)}
                        className="inline-flex p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                        title="Delete article"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination bar */}
        {!loading && totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 bg-gray-50/50 border-t border-gray-100">
            <span className="text-xs text-gray-400 font-light">
              Page {page} of {totalPages}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setPage(p => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50" onClick={() => setDeleteId(null)} />
          <div className="relative bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-gray-100 animate-fade-in">
            <h3 className="text-lg font-bold text-gray-900 font-satoshi mb-2">Delete Blog Post</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
              Are you sure you want to delete <span className="font-semibold text-gray-800">"{deleteTitle}"</span>? This action is permanent and cannot be undone.
            </p>
            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={() => setDeleteId(null)}
                disabled={deleting}
                className="px-4.5 py-2 rounded-xl text-gray-500 hover:bg-gray-100 text-sm font-semibold transition-colors disabled:opacity-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="px-4.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer flex items-center gap-1.5"
              >
                {deleting && <Loader className="w-4 h-4 animate-spin" />}
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
