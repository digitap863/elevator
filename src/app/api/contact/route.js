import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';
import { sendContactEmail } from '@/lib/nodemailer';

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const { name, contact, email, service, location, message } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json({ success: false, error: 'Name is required' }, { status: 400 });
    }
    if (!contact || !contact.trim()) {
      return NextResponse.json({ success: false, error: 'Contact number is required' }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ success: false, error: 'Email address is required' }, { status: 400 });
    }

    // Save to Database
    const newContact = await Contact.create({
      name: name.trim(),
      contact: contact.trim(),
      email: email.trim(),
      service: service ? service.trim() : 'General Inquiry',
      location: location ? location.trim() : '',
      message: message ? message.trim() : '',
      status: 'New',
    });

    // Send Mail Notification (non-blocking failure handling)
    const emailResult = await sendContactEmail({
      name: newContact.name,
      contact: newContact.contact,
      email: newContact.email,
      service: newContact.service,
      location: newContact.location,
      message: newContact.message,
    });

    return NextResponse.json({
      success: true,
      data: newContact,
      emailSent: emailResult.sent,
      message: 'Contact form submitted successfully!',
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ success: false, error: error.message || 'Server error' }, { status: 500 });
  }
}
