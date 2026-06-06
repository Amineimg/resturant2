import { NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create contact message in Sanity
    const contactMessage = await writeClient.create({
      _type: 'contactMessage',
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Message sent successfully', id: contactMessage._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
