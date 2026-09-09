import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Project from '@/models/Project';

export async function GET(request) {
  try {
    await connectToDatabase();
    const projects = await Project.find({}).sort({ order: 1, createdAt: -1 });
    return NextResponse.json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    if (!body.title || !body.category || !body.location || !body.description) {
      return NextResponse.json(
        { success: false, error: 'Please provide title, category, location, and description.' },
        { status: 400 }
      );
    }

    // Process images array
    const images = Array.isArray(body.images) ? body.images.filter(Boolean) : [];
    const featuredImage = body.featuredImage || (images.length > 0 ? images[0] : '/projects/p2.jpg');

    if (images.length === 0 && featuredImage) {
      images.push(featuredImage);
    }

    const newProject = await Project.create({
      title: body.title,
      category: body.category,
      location: body.location,
      description: body.description,
      featuredImage: featuredImage,
      images: images,
      status: body.status || 'Published',
      order: body.order ? Number(body.order) : 0,
    });

    return NextResponse.json({ success: true, data: newProject }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
