import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const envUsername = process.env.ADMIN_USERNAME || 'admin';
    const envPassword = process.env.ADMIN_PASSWORD;

    if (!envPassword) {
      return NextResponse.json(
        { success: false, error: 'Admin credentials are not configured on the server.' },
        { status: 500 }
      );
    }

    if (username === envUsername && password === envPassword) {
      const response = NextResponse.json({ success: true, message: 'Logged in successfully' });

      // Set secure HttpOnly session cookie
      response.cookies.set({
        name: 'admin_session',
        value: 'authenticated_reliant_admin_session_token',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });

      return response;
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid username or password' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
