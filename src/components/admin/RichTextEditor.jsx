'use client';

import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { 
  Bold, 
  Italic, 
  Underline as UnderlineIcon,
  List, 
  ListOrdered, 
  Heading1, 
  Heading2, 
  Heading3,
  Image as ImageIcon,
  Link as LinkIcon,
  Unlink,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
  Code
} from 'lucide-react';

export default function RichTextEditor({ value = '', onChange, placeholder, disabled = false, stickyTop = '130px' }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
          HTMLAttributes: {
            class: 'heading',
          },
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: 'list-disc pl-4',
          },
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: 'list-decimal pl-4',
          },
        },
      }),
      Image,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 hover:text-blue-700 underline',
        },
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right'],
        defaultAlignment: 'left',
      }),
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] p-4',
        placeholder: placeholder || '',
      },
    },
  });

  useEffect(() => {
    if (editor && value !== undefined && !editor.isFocused && editor.getHTML() !== value) {
      editor.commands.setContent(value || '', false);
    }
  }, [value, editor]);

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt('Enter the URL of the image:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const removeLink = () => {
    editor.chain().focus().extendMarkRange('link').unsetLink().run();
  };

  const addLink = () => {
    const previousUrl = editor.getAttributes('link').href || '';
    const url = window.prompt(
      'Enter URL (e.g. /about, /blog/safety-tips, or https://...):\nLeave empty to remove link.',
      previousUrl
    );

    if (url === null) {
      return; // User cancelled prompt
    }

    if (url.trim() === '') {
      removeLink();
      return;
    }

    let trimmed = url.trim();
    let isInternal = false;

    if (trimmed.startsWith('/') || trimmed.startsWith('#') || trimmed.startsWith('mailto:') || trimmed.startsWith('tel:')) {
      isInternal = true;
    } else if (/^https?:\/\//i.test(trimmed)) {
      try {
        const parsed = new URL(trimmed);
        const currentHost = typeof window !== 'undefined' ? window.location.hostname : '';
        if (parsed.hostname.includes('reliantelevators.com') || (currentHost && parsed.hostname === currentHost)) {
          isInternal = true;
          // Convert absolute URL of same site to relative path
          trimmed = parsed.pathname + parsed.search + parsed.hash;
        } else {
          isInternal = false;
        }
      } catch (e) {
        isInternal = false;
      }
    } else if (/^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/.test(trimmed)) {
      // Domain string without protocol e.g. "reliantelevators.com/blog/..." or "google.com"
      const currentHost = typeof window !== 'undefined' ? window.location.hostname : '';
      if (trimmed.includes('reliantelevators.com') || (currentHost && trimmed.startsWith(currentHost))) {
        isInternal = true;
        const slashIndex = trimmed.indexOf('/');
        trimmed = slashIndex !== -1 ? trimmed.slice(slashIndex) : '/';
      } else {
        isInternal = false;
        trimmed = 'https://' + trimmed;
      }
    } else {
      // Relative path without leading slash e.g. "blog/safety-tips" or "about"
      isInternal = true;
      trimmed = '/' + trimmed;
    }

    const { selection } = editor.state;
    const isLinkActive = editor.isActive('link');

    if (isLinkActive) {
      if (isInternal) {
        editor.chain().focus().extendMarkRange('link').setLink({ href: trimmed, target: '_self' }).run();
      } else {
        editor.chain().focus().extendMarkRange('link').setLink({ href: trimmed, target: '_blank', rel: 'noopener noreferrer' }).run();
      }
    } else if (!selection.empty) {
      if (isInternal) {
        editor.chain().focus().setLink({ href: trimmed, target: '_self' }).run();
      } else {
        editor.chain().focus().setLink({ href: trimmed, target: '_blank', rel: 'noopener noreferrer' }).run();
      }
    } else {
      const linkText = window.prompt('Enter display text for this link:', trimmed) || trimmed;
      const linkHtml = isInternal
        ? `<a href="${trimmed}" target="_self">${linkText}</a>`
        : `<a href="${trimmed}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
      editor.chain().focus().insertContent(linkHtml).run();
    }
  };

  return (
    <div className="border rounded-md bg-white">
      <style jsx global>{`
        .ProseMirror {
          min-height: 300px;
        }
        .ProseMirror h1 {
          font-size: 2.5em;
          font-weight: 700;
          margin: 1em 0 0.5em;
          line-height: 1.2;
        }
        .ProseMirror h2 {
          font-size: 2em;
          font-weight: 600;
          margin: 1em 0 0.5em;
          line-height: 1.3;
        }
        .ProseMirror h3 {
          font-size: 1.5em;
          font-weight: 600;
          margin: 1em 0 0.5em;
          line-height: 1.4;
        }
        .ProseMirror p {
          margin: 1em 0;
        }
        .ProseMirror ul {
          list-style-type: disc;
          padding-left: 1.5em;
          margin: 1em 0;
        }
        .ProseMirror ol {
          list-style-type: decimal;
          padding-left: 1.5em;
          margin: 1em 0;
        }
        .ProseMirror li {
          margin: 0.5em 0;
        }
      `}</style>
      
      {/* Sticky Toolbar */}
      <div 
        className="sticky z-20 flex flex-wrap gap-1 p-2 border-b border-gray-200 bg-gray-50/98 backdrop-blur-md rounded-t-md shadow-xs transition-all"
        style={{ top: typeof stickyTop === 'number' ? `${stickyTop}px` : stickyTop }}
      >
        <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('bold') ? 'bg-gray-200 text-gray-900 font-bold' : 'text-gray-600'}`}
            disabled={disabled}
            title="Bold"
          >
            <Bold className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('italic') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'}`}
            disabled={disabled}
            title="Italic"
          >
            <Italic className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('underline') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'}`}
            disabled={disabled}
            title="Underline"
          >
            <UnderlineIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200 text-gray-900 font-bold' : 'text-gray-600'}`}
            disabled={disabled}
            title="Heading 1"
          >
            <Heading1 className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 text-gray-900 font-bold' : 'text-gray-600'}`}
            disabled={disabled}
            title="Heading 2"
          >
            <Heading2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200 text-gray-900 font-bold' : 'text-gray-600'}`}
            disabled={disabled}
            title="Heading 3"
          >
            <Heading3 className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('bulletList') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'}`}
            disabled={disabled}
            title="Bullet List"
          >
            <List className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('orderedList') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'}`}
            disabled={disabled}
            title="Ordered List"
          >
            <ListOrdered className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600'}`}
            disabled={disabled}
            title="Align Left"
          >
            <AlignLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600'}`}
            disabled={disabled}
            title="Align Center"
          >
            <AlignCenter className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600'}`}
            disabled={disabled}
            title="Align Right"
          >
            <AlignRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={disabled}
            className="p-2 rounded hover:bg-gray-200 text-gray-600 disabled:opacity-40"
            title="Undo"
          >
            <Undo className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={disabled}
            className="p-2 rounded hover:bg-gray-200 text-gray-600 disabled:opacity-40"
            title="Redo"
          >
            <Redo className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={addLink}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('link') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'}`}
            disabled={disabled}
            title={editor.isActive('link') ? "Edit Link" : "Add Link"}
          >
            <LinkIcon className="h-4 w-4" />
          </button>
          {editor.isActive('link') && (
            <button
              type="button"
              onClick={removeLink}
              className="p-2 rounded hover:bg-red-100 text-red-600 transition-colors"
              disabled={disabled}
              title="Remove Link"
            >
              <Unlink className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={addImage}
            className="p-2 rounded hover:bg-gray-200 text-gray-600"
            disabled={disabled}
            title="Image"
          >
            <ImageIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('code') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'}`}
            disabled={disabled}
            title="Code"
          >
            <Code className="h-4 w-4" />
          </button>
        </div>
      </div>

      <EditorContent 
        editor={editor} 
        className="prose max-w-none p-4 min-h-[300px] focus:outline-none"
      />
    </div>
  );
}
