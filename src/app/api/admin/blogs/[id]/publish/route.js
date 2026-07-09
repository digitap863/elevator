import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';

export async function PATCH(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog post not found' }, { status: 404 });
    }
    
    const newStatus = blog.status === 'Published' ? 'Draft' : 'Published';
    blog.status = newStatus;
    await blog.save();
    
    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
