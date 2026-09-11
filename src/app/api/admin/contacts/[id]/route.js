import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';

// PATCH update contact status or fields
export async function PATCH(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      return NextResponse.json({ success: false, error: 'Contact submission not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedContact });
  } catch (error) {
    console.error('Error updating contact status:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// DELETE contact submission
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return NextResponse.json({ success: false, error: 'Contact submission not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Contact submission deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact submission:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
