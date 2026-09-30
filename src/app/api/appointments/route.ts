import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { appointments } from '@/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, service, preferredDate, preferredTime, location, message } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Name, phone, and service are required' },
        { status: 400 }
      );
    }

    const appointment = await db.insert(appointments).values({
      name,
      phone,
      service,
      preferredDate,
      preferredTime,
      location,
      message,
    }).returning();

    return NextResponse.json({ 
      success: true, 
      appointment: appointment[0],
      message: 'Appointment request received successfully!' 
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allAppointments = await db.select().from(appointments);
    return NextResponse.json({ appointments: allAppointments });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}
