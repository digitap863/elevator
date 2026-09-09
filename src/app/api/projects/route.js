import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Project from '@/models/Project';

export async function GET(request) {
  try {
    await connectToDatabase();
    const projects = await Project.find({ status: 'Published' }).sort({ order: 1, createdAt: -1 });
    return NextResponse.json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    console.error('Error fetching public projects:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects', data: [] },
      { status: 500 }
    );
  }
}
