import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';

// GET all contact submissions with search, status filtering, and pagination
export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const search = searchParams.get('search') || '';
    const statusFilter = searchParams.get('status') || '';

    const skip = (page - 1) * limit;

    const query = {};

    if (statusFilter && statusFilter !== 'All') {
      query.status = statusFilter;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { contact: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } },
        { service: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } },
      ];
    }

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Contact.countDocuments(query);
    const newCount = await Contact.countDocuments({ status: 'New' });
    const contactedCount = await Contact.countDocuments({ status: 'Contacted' });
    const resolvedCount = await Contact.countDocuments({ status: 'Resolved' });
    const grandTotal = await Contact.countDocuments({});

    return NextResponse.json({
      success: true,
      data: contacts,
      stats: {
        total: grandTotal,
        new: newCount,
        contacted: contactedCount,
        resolved: resolvedCount,
      },
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching admin contacts:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
