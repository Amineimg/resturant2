import { NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests } = body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !guests) {
      return NextResponse.json(
        { error: 'All fields are required' },
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

    // Create reservation in Sanity
    const reservation = await writeClient.create({
      _type: 'reservation',
      name,
      email,
      phone,
      date,
      time,
      guests: Number(guests),
      status: 'pending',
    });

    return NextResponse.json(
      { message: 'Reservation created successfully', id: reservation._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Reservation error:', error);
    return NextResponse.json(
      { error: 'Failed to create reservation' },
      { status: 500 }
    );
  }
}
