import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';

// GET single blog details
export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog post not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// PUT update blog
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    
    // Auto slug verification / creation if empty
    if (!body.slug) {
      body.slug = body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }
    
    // Check slug uniqueness (excluding current post)
    const existing = await Blog.findOne({ slug: body.slug, _id: { $ne: id } });
    if (existing) {
      return NextResponse.json({ success: false, error: 'Slug already exists. Please choose a unique slug or title.' }, { status: 400 });
    }
    
    const updatedBlog = await Blog.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true
    });
    
    if (!updatedBlog) {
      return NextResponse.json({ success: false, error: 'Blog post not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: updatedBlog });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// DELETE blog
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return NextResponse.json({ success: false, error: 'Blog post not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, message: 'Blog post deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
