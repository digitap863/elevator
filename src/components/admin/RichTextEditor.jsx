'use client';

import { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { Link } from '@tiptap/extension-link';
import { Image } from '@tiptap/extension-image';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableCell } from '@tiptap/extension-table-cell';
import { TextAlign } from '@tiptap/extension-text-align';

import {
  Bold, Italic, Underline as UnderlineIcon,
  List, ListOrdered, Quote, Link as LinkIcon, Image as ImageIcon,
  Table as TableIcon, Code, Minus, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Undo2, Redo2, X, Check, Upload, Loader, Globe, Link2, Trash2
} from 'lucide-react';

const SITE_PAGES = [
  { label: 'Home Page', path: '/' },
  { label: 'Blogs Overview', path: '/blog' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Home Lifts Service', path: '/services/home-lifts' },
  { label: 'Commercial Lifts Service', path: '/services/commercial-lifts' },
  { label: 'Escalators Service', path: '/services/escalators' },
];

export default function RichTextEditor({ value, onChange, placeholder }) {
  const [activeModal, setActiveModal] = useState(null); // 'link' | 'image' | 'table' | null

  // Modal form states
  const [linkTab, setLinkTab] = useState('internal'); // 'internal' | 'external'
  const [linkForm, setLinkForm] = useState({ url: '', openInNewTab: false });
  const [availableBlogs, setAvailableBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);

  const [imageForm, setImageForm] = useState({ url: '', alt: '', file: null, uploading: false });
  const [tableForm, setTableForm] = useState({ rows: 3, cols: 3 });

  // Fetch internal published blogs for link suggestions
  useEffect(() => {
    async function fetchBlogs() {
      setLoadingBlogs(true);
      try {
        const res = await fetch('/api/blogs');
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setAvailableBlogs(json.data);
        }
      } catch (err) {
        console.error('Failed to load internal blogs for link picker:', err);
      } finally {
        setLoadingBlogs(false);
      }
    }
    fetchBlogs();
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-[#C10510] hover:underline font-semibold cursor-pointer',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-2xl my-6 mx-auto block shadow-md',
        },
      }),
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: 'min-w-full border-collapse border border-gray-200 text-sm rounded-xl overflow-hidden',
        },
      }),
      TableRow,
      TableHeader,
      TableCell,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: value || '',
    editorProps: {
      attributes: {
        class: 'w-full px-5 py-4 min-h-[400px] max-h-[600px] overflow-y-auto focus:outline-none text-base leading-relaxed text-gray-800 font-satoshi prose prose-slate max-w-none tiptap',
        placeholder: placeholder || 'Write your rich blog content here...',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Sync content from parent state (for load/external changes)
  useEffect(() => {
    if (editor && value !== undefined) {
      const isSame = editor.getHTML() === value;
      if (!isSame) {
        editor.commands.setContent(value || '');
      }
    }
  }, [value, editor]);

  if (!editor) {
    return (
      <div className="flex items-center justify-center min-h-[400px] border border-gray-200 rounded-2xl bg-gray-50">
        <Loader className="w-6 h-6 text-gray-400 animate-spin" />
      </div>
    );
  }

  // Link Handlers
  const handleOpenLinkModal = () => {
    const previousAttrs = editor.getAttributes('link');
    const previousUrl = previousAttrs.href || '';
    const previousTarget = previousAttrs.target || '';

    const isInternal = !previousUrl || previousUrl.startsWith('/') || previousUrl.startsWith('#') || previousUrl.startsWith('mailto:') || previousUrl.startsWith('tel:');

    setLinkTab(isInternal ? 'internal' : 'external');
    setLinkForm({
      url: previousUrl,
      openInNewTab: previousTarget === '_blank'
    });
    setActiveModal('link');
  };

  const handleInsertLink = (e) => {
    e.preventDefault();
    if (!linkForm.url || !linkForm.url.trim()) {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      setActiveModal(null);
      return;
    }

    let url = linkForm.url.trim();

    if (linkTab === 'internal') {
      if (!url.startsWith('/') && !url.startsWith('#') && !url.startsWith('mailto:') && !url.startsWith('tel:')) {
        url = '/' + url;
      }
    } else {
      if (!/^https?:\/\//i.test(url) && !url.startsWith('/') && !url.startsWith('#')) {
        url = 'https://' + url;
      }
    }

    const linkAttrs = {
      href: url,
      target: linkForm.openInNewTab ? '_blank' : '_self'
    };

    if (linkForm.openInNewTab) {
      linkAttrs.rel = 'noopener noreferrer';
    } else {
      linkAttrs.rel = null;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink(linkAttrs)
      .run();

    setActiveModal(null);
  };

  const handleRemoveLink = () => {
    editor.chain().focus().extendMarkRange('link').unsetLink().run();
    setActiveModal(null);
  };

  // Image Handlers
  const handleOpenImageModal = () => {
    setImageForm({ url: '', alt: '', file: null, uploading: false });
    setActiveModal('image');
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageForm(prev => ({ ...prev, file, uploading: true }));
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData
      });
      const json = await res.json();
      if (json.success) {
        setImageForm(prev => ({ ...prev, url: json.url, uploading: false }));
      } else {
        alert(json.error || 'Failed to upload image');
        setImageForm(prev => ({ ...prev, uploading: false }));
      }
    } catch (err) {
      console.error(err);
      alert('Error uploading image');
      setImageForm(prev => ({ ...prev, uploading: false }));
    }
  };

  const handleInsertImage = (e) => {
    e.preventDefault();
    if (!imageForm.url) return;

    editor
      .chain()
      .focus()
      .setImage({ src: imageForm.url, alt: imageForm.alt || 'Blog Image' })
      .run();

    setActiveModal(null);
  };

  // Table Handlers
  const handleInsertTable = (e) => {
    e.preventDefault();
    const { rows, cols } = tableForm;
    if (rows <= 0 || cols <= 0) return;

    editor
      .chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: true })
      .run();

    setActiveModal(null);
  };

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs focus-within:ring-2 focus-within:ring-slate-900/5 focus-within:border-slate-800 transition-all relative">
      {/* Editor Formatting toolbar */}
      <div className="bg-gray-55 border-b border-gray-200 p-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1">
          {/* History */}
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            title="Undo"
          >
            <Undo2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            title="Redo"
          >
            <Redo2 className="w-4 h-4" />
          </button>

          <span className="w-px h-5 bg-gray-300 mx-1"></span>

          {/* Heading Select */}
          <select
            onChange={(e) => {
              const val = e.target.value;
              if (val === 'p') {
                editor.chain().focus().setParagraph().run();
              } else {
                const level = parseInt(val.replace('h', ''));
                editor.chain().focus().toggleHeading({ level }).run();
              }
            }}
            value={
              editor.isActive('heading', { level: 1 }) ? 'h1' :
              editor.isActive('heading', { level: 2 }) ? 'h2' :
              editor.isActive('heading', { level: 3 }) ? 'h3' :
              editor.isActive('heading', { level: 4 }) ? 'h4' :
              editor.isActive('heading', { level: 5 }) ? 'h5' :
              editor.isActive('heading', { level: 6 }) ? 'h6' : 'p'
            }
            className="text-xs bg-white border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:border-slate-800 text-gray-700 font-semibold cursor-pointer"
          >
            <option value="p">Paragraph</option>
            <option value="h1">H1 (Heading 1)</option>
            <option value="h2">H2 (Heading 2)</option>
            <option value="h3">H3 (Heading 3)</option>
            <option value="h4">H4 (Heading 4)</option>
            <option value="h5">H5 (Heading 5)</option>
            <option value="h6">H6 (Heading 6)</option>
          </select>

          <span className="w-px h-5 bg-gray-300 mx-1"></span>

          {/* Inline styles */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer ${editor.isActive('bold') ? 'bg-gray-200 font-bold text-slate-900' : ''}`}
            title="Bold"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer ${editor.isActive('italic') ? 'bg-gray-200 text-slate-900' : ''}`}
            title="Italic"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer ${editor.isActive('underline') ? 'bg-gray-200 text-slate-900' : ''}`}
            title="Underline"
          >
            <UnderlineIcon className="w-4 h-4" />
          </button>

          <span className="w-px h-5 bg-gray-300 mx-1"></span>

          {/* Alignments */}
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={`p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200 text-slate-900' : ''}`}
            title="Align Left"
          >
            <AlignLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={`p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200 text-slate-900' : ''}`}
            title="Align Center"
          >
            <AlignCenter className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={`p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200 text-slate-900' : ''}`}
            title="Align Right"
          >
            <AlignRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={`p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer ${editor.isActive({ textAlign: 'justify' }) ? 'bg-gray-200 text-slate-900' : ''}`}
            title="Justify"
          >
            <AlignJustify className="w-4 h-4" />
          </button>

          <span className="w-px h-5 bg-gray-300 mx-1"></span>

          {/* Lists */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer ${editor.isActive('bulletList') ? 'bg-gray-200 text-slate-900' : ''}`}
            title="Unordered List"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer ${editor.isActive('orderedList') ? 'bg-gray-200 text-slate-900' : ''}`}
            title="Ordered List"
          >
            <ListOrdered className="w-4 h-4" />
          </button>

          <span className="w-px h-5 bg-gray-300 mx-1"></span>

          {/* Inserts */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer ${editor.isActive('blockquote') ? 'bg-gray-200 text-slate-900' : ''}`}
            title="Blockquote"
          >
            <Quote className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleOpenLinkModal}
            className={`p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer ${editor.isActive('link') ? 'bg-gray-200 text-slate-900' : ''}`}
            title="Insert Link"
          >
            <LinkIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleOpenImageModal}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
            title="Insert Image"
          >
            <ImageIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setActiveModal('table')}
            className={`p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer ${editor.isActive('table') ? 'bg-gray-200 text-slate-900' : ''}`}
            title="Insert Table"
          >
            <TableIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={`p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer ${editor.isActive('codeBlock') ? 'bg-gray-200 text-slate-900' : ''}`}
            title="Insert Code Block"
          >
            <Code className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
            title="Horizontal Rule"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editor Content Area */}
      <EditorContent editor={editor} />

      {/* MODALS */}
      {activeModal && (
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          {/* Link Modal */}
          {activeModal === 'link' && (
            <form onSubmit={handleInsertLink} className="bg-white rounded-2xl border border-gray-150 p-5 w-full max-w-md shadow-xl space-y-4 font-satoshi">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-[#C10510]" />
                  <span>Insert / Edit Link</span>
                </h4>
                <button type="button" onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Link Type Tabs */}
              <div className="flex bg-gray-100 p-1 rounded-xl gap-1 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setLinkTab('internal');
                    if (linkForm.url && /^https?:\/\//i.test(linkForm.url)) {
                      setLinkForm(prev => ({ ...prev, url: '' }));
                    }
                  }}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    linkTab === 'internal'
                      ? 'bg-white text-gray-900 shadow-xs'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <Link2 className="w-3.5 h-3.5" />
                  <span>Internal Link</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLinkTab('external');
                    setLinkForm(prev => ({ ...prev, openInNewTab: true }));
                  }}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    linkTab === 'external'
                      ? 'bg-white text-gray-900 shadow-xs'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>External Link</span>
                </button>
              </div>

              {/* Form Content Based on Tab */}
              {linkTab === 'internal' ? (
                <div className="space-y-3">
                  {/* Select Main Page Dropdown */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 block">Select Site Page</label>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          setLinkForm(prev => ({ ...prev, url: e.target.value }));
                        }
                      }}
                      value={SITE_PAGES.some(p => p.path === linkForm.url) ? linkForm.url : ''}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-xs font-satoshi cursor-pointer"
                    >
                      <option value="">-- Choose a standard page --</option>
                      {SITE_PAGES.map(page => (
                        <option key={page.path} value={page.path}>
                          {page.label} ({page.path})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Select Existing Blog Dropdown */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 block">Link to Existing Article</label>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          setLinkForm(prev => ({ ...prev, url: e.target.value }));
                        }
                      }}
                      value={linkForm.url.startsWith('/blog/') && availableBlogs.some(b => `/blog/${b.slug}` === linkForm.url) ? linkForm.url : ''}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-xs font-satoshi cursor-pointer"
                      disabled={loadingBlogs}
                    >
                      <option value="">{loadingBlogs ? 'Loading articles...' : '-- Choose a published blog post --'}</option>
                      {availableBlogs.map(blog => (
                        <option key={blog._id || blog.slug} value={`/blog/${blog.slug}`}>
                          {blog.title} (/blog/{blog.slug})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Custom Internal URL */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 block">Custom Path / Anchor</label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-xs text-gray-400 font-mono">/</span>
                      <input
                        type="text"
                        value={linkForm.url.startsWith('/') ? linkForm.url.slice(1) : linkForm.url}
                        onChange={(e) => {
                          const val = e.target.value;
                          setLinkForm(prev => ({
                            ...prev,
                            url: val.startsWith('#') || val.startsWith('mailto:') || val.startsWith('tel:') ? val : '/' + val.replace(/^\/+/, '')
                          }));
                        }}
                        placeholder="blog/article-slug or #section"
                        className="w-full pl-7 pr-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-xs font-satoshi"
                      />
                    </div>
                    <span className="text-[10px] text-gray-400 block">Example: /blog/safety-tips, /about, or #contact</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 block">External Web URL</label>
                    <input
                      type="text"
                      required
                      value={linkForm.url}
                      onChange={(e) => setLinkForm(prev => ({ ...prev, url: e.target.value }))}
                      placeholder="https://example.com"
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-xs font-satoshi"
                    />
                    <span className="text-[10px] text-gray-400 block">Full address (e.g. https://google.com)</span>
                  </div>
                </div>
              )}

              {/* Open in new tab checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="openInNewTab"
                  checked={linkForm.openInNewTab}
                  onChange={(e) => setLinkForm(prev => ({ ...prev, openInNewTab: e.target.checked }))}
                  className="rounded border-gray-300 text-[#C10510] focus:ring-[#C10510] h-4 w-4 cursor-pointer"
                />
                <label htmlFor="openInNewTab" className="text-xs text-gray-700 font-medium cursor-pointer select-none">
                  Open link in a new tab
                </label>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                {editor.isActive('link') ? (
                  <button
                    type="button"
                    onClick={handleRemoveLink}
                    className="px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Unlink</span>
                  </button>
                ) : <div />}

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-3 py-1.5 text-xs font-semibold text-gray-500 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-semibold bg-[#C10510] hover:bg-red-700 text-white rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{editor.isActive('link') ? 'Update Link' : 'Apply Link'}</span>
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Image Modal */}
          {activeModal === 'image' && (
            <form onSubmit={handleInsertImage} className="bg-white rounded-2xl border border-gray-155 p-5 w-full max-w-sm shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-900 text-sm font-satoshi">Insert Image</h4>
                <button type="button" onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-4 h-4" /></button>
              </div>
              <div className="space-y-3">
                {/* File upload option */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 block">Upload Image (Local File)</label>
                  {imageForm.uploading ? (
                    <div className="py-3 bg-gray-50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center gap-2">
                      <Loader className="w-4 h-4 text-gray-400 animate-spin" />
                      <span className="text-[11px] text-gray-500 font-light">Uploading...</span>
                    </div>
                  ) : imageForm.url ? (
                    <div className="p-2 bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200 rounded-xl flex items-center justify-between">
                      <span className="truncate max-w-[220px]">Image uploaded successfully!</span>
                      <button
                        type="button"
                        onClick={() => setImageForm(prev => ({ ...prev, url: '', file: null }))}
                        className="text-emerald-900 hover:underline cursor-pointer"
                      >
                        Change
                      </button>
                    </div>
                  ) : (
                    <div className="relative border border-dashed border-gray-250 hover:bg-gray-50 rounded-xl p-3 text-center transition-colors cursor-pointer flex items-center justify-center gap-1.5">
                      <Upload className="w-4 h-4 text-gray-400" />
                      <span className="text-[11px] text-gray-500 font-semibold">Choose file to upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-center my-2 text-center text-xs text-gray-400 before:content-[''] before:flex-1 before:border-b before:border-gray-200 before:mr-2 after:content-[''] after:flex-1 after:border-b after:border-gray-200 after:ml-2">
                  OR
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 block">Image URL</label>
                  <input
                    type="text"
                    value={imageForm.url}
                    onChange={(e) => setImageForm(prev => ({ ...prev, url: e.target.value }))}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-xs font-satoshi"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 block">Alt Description</label>
                  <input
                    type="text"
                    value={imageForm.alt}
                    onChange={(e) => setImageForm(prev => ({ ...prev, alt: e.target.value }))}
                    placeholder="Describe the image (SEO friendly)"
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-xs font-satoshi"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-3 py-1.5 text-xs font-semibold text-gray-500 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!imageForm.url || imageForm.uploading}
                  className="px-3 py-1.5 text-xs font-semibold bg-[#C10510] hover:bg-red-700 text-white rounded-lg transition-colors cursor-pointer flex items-center gap-1 disabled:opacity-50"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Insert Image</span>
                </button>
              </div>
            </form>
          )}

          {/* Table Modal */}
          {activeModal === 'table' && (
            <form onSubmit={handleInsertTable} className="bg-white rounded-2xl border border-gray-155 p-5 w-full max-w-sm shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-900 text-sm font-satoshi">Insert Table</h4>
                <button type="button" onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-4 h-4" /></button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 block">Number of Rows</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    required
                    value={tableForm.rows}
                    onChange={(e) => setTableForm(prev => ({ ...prev, rows: parseInt(e.target.value) || 1 }))}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-xs font-satoshi"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 block">Number of Columns</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    required
                    value={tableForm.cols}
                    onChange={(e) => setTableForm(prev => ({ ...prev, cols: parseInt(e.target.value) || 1 }))}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-slate-800 text-xs font-satoshi"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-3 py-1.5 text-xs font-semibold text-gray-500 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1.5 text-xs font-semibold bg-[#C10510] hover:bg-red-700 text-white rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Insert Table</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
