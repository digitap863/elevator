'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, X, Check, Loader2, ImagePlus, Building, Trash2 } from 'lucide-react';

export default function EditProjectPage({ params }) {
  const { id } = use(params);
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: 'Commercial',
    location: '',
    description: '',
    status: 'Published',
    order: 0,
  });

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/admin/projects/${id}`);
        const data = await res.json();
        if (data.success && data.data) {
          const p = data.data;
          setFormData({
            title: p.title || '',
            category: p.category || 'Commercial',
            location: p.location || '',
            description: p.description || '',
            status: p.status || 'Published',
            order: p.order || 0,
          });

          // Set existing images
          if (p.images && p.images.length > 0) {
            setImages(p.images);
          } else if (p.featuredImage || p.image) {
            setImages([p.featuredImage || p.image]);
          }
        } else {
          alert('Project not found');
          router.push('/admin/projects');
        }
      } catch (err) {
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultipleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setUploading(true);
    const uploadedUrls = [];

    for (const file of files) {
      try {
        const fileData = new FormData();
        fileData.append('file', file);

        const res = await fetch('/api/admin/upload', {
          method: 'POST',
          body: fileData,
        });

        const json = await res.json();
        if (json.success && json.url) {
          uploadedUrls.push(json.url);
        } else {
          alert(`Failed to upload ${file.name}`);
        }
      } catch (err) {
        console.error('Error uploading file:', err);
      }
    }

    setImages((prev) => [...prev, ...uploadedUrls]);
    setUploading(false);
  };

  const removeImage = (indexToRemove) => {
    setImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.category || !formData.location || !formData.description) {
      alert('Please fill in all required fields.');
      return;
    }

    if (images.length === 0) {
      alert('Please upload at least one image.');
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        ...formData,
        featuredImage: images[0],
        images: images,
      };

      const res = await fetch(`/api/admin/projects/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (json.success) {
        router.push('/admin/projects');
      } else {
        alert(json.error || 'Failed to update project');
      }
    } catch (err) {
      console.error('Error updating project:', err);
      alert('Error updating project');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center bg-white rounded-3xl border border-gray-100 mt-6">
        <Loader2 className="w-8 h-8 text-[#376378] animate-spin mx-auto mb-3" />
        <p className="text-gray-500 font-medium">Loading project details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 font-satoshi">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/admin/projects"
          className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Building className="w-6 h-6 text-[#376378]" />
            Edit Project: {formData.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Update project information and manage gallery images for the Swiper detail modal.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2 sm:col-span-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                Project Title / Client Name *
              </label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#376378]/30 focus:border-[#376378]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#376378]/30 focus:border-[#376378]"
              >
                <option value="Commercial">Commercial</option>
                <option value="Home">Home</option>
                <option value="Hospital">Hospital</option>
                <option value="Structural">Structural</option>
                <option value="Hospitality">Hospitality</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                Location *
              </label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#376378]/30 focus:border-[#376378]"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
              Project Overview & Description *
            </label>
            <textarea
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#376378]/30 focus:border-[#376378]"
            />
          </div>

          {/* Multiple Image Upload Section */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                  Project Image Gallery ({images.length} Images)
                </label>
                <p className="text-xs text-gray-400 mt-0.5">
                  Upload additional images or remove images. These display in the Swiper detail modal.
                </p>
              </div>
            </div>

            {/* Upload Box */}
            <div className="relative border-2 border-dashed border-gray-200 hover:border-[#376378] transition-colors rounded-2xl p-6 text-center bg-gray-50/50 cursor-pointer">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleMultipleImageUpload}
                disabled={uploading}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
              />
              <div className="flex flex-col items-center justify-center space-y-2">
                {uploading ? (
                  <>
                    <Loader2 className="w-8 h-8 text-[#376378] animate-spin" />
                    <p className="text-sm font-medium text-gray-600">Uploading new images...</p>
                  </>
                ) : (
                  <>
                    <ImagePlus className="w-10 h-10 text-gray-400" />
                    <p className="text-sm font-semibold text-gray-700">
                      Click or Drag & Drop additional images to add to gallery
                    </p>
                    <p className="text-xs text-gray-400">PNG, JPG, WEBP formats supported</p>
                  </>
                )}
              </div>
            </div>

            {/* Gallery Thumbnails Grid */}
            {images.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3">
                {images.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="relative group rounded-xl overflow-hidden border border-gray-200 bg-gray-100 h-28"
                  >
                    <Image src={imgUrl} alt={`Gallery ${idx}`} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => removeImage(idx)}
                        className="bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700 transition"
                        title="Remove Image"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    {idx === 0 && (
                      <span className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        Cover Image
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form Actions */}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-end space-x-4">
            <Link
              href="/admin/projects"
              className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submitting || uploading}
              className="inline-flex items-center space-x-2 bg-[#376378] hover:bg-[#2a4c5c] text-white px-7 py-3 rounded-xl font-medium shadow-md transition-all text-sm disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Saving Changes...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Update Project</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
