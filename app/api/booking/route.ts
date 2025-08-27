import { NextRequest, NextResponse } from 'next/server';

// This would typically connect to your database
// For now, we'll just log the data and return a success response
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'mobile', 'address', 'service'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Log the booking data (in a real app, you would save to a database)
    console.log('Booking received:', data);
    
    // Here you would typically save the data to your database
    // For example: await prisma.booking.create({ data });
    // or: await mongoose.models.Booking.create(data);
    
    // For now, we'll simulate a successful database operation
    return NextResponse.json(
      { success: true, message: 'Booking request received successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}