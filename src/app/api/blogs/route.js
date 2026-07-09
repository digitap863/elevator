import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    const filter = { status: 'Published' };
    if (category && category !== 'All') {
      // Use case-insensitive exact match
      filter.category = { $regex: new RegExp(`^${category}$`, 'i') };
    }

    const blogs = await Blog.find(filter).sort({ publishDate: -1 });
    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
