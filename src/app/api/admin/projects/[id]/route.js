import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Project from '@/models/Project';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    await connectToDatabase();
    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: project });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    await connectToDatabase();
    const body = await request.json();

    const images = Array.isArray(body.images) ? body.images.filter(Boolean) : [];
    const featuredImage = body.featuredImage || (images.length > 0 ? images[0] : '/projects/p2.jpg');

    if (images.length === 0 && featuredImage) {
      images.push(featuredImage);
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title: body.title,
        category: body.category,
        location: body.location,
        description: body.description,
        featuredImage: featuredImage,
        images: images,
        status: body.status,
        order: body.order ? Number(body.order) : 0,
      },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedProject });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await connectToDatabase();
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
