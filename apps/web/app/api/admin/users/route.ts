import { NextResponse } from 'next/server';
import { connectDB, User } from '@repo/database';
import { v4 as uuidv4 } from 'uuid';

export const dynamic = 'force-dynamic';

export async function GET() {
  await connectDB();
  try {
    const users = await (User as any).find({}).sort({ createdAt: -1 });
    return NextResponse.json(users);
  } catch (error) {
    console.error('[API] Users GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await connectDB();
  try {
    const body = await request.json();
    const { username, email, role } = body;
    
    if (!username || !email) {
      return NextResponse.json({ error: 'Username and email are required' }, { status: 400 });
    }

    const existingUser = await (User as any).findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists with this username or email' }, { status: 400 });
    }

    const user = new User({
      id: uuidv4(),
      username,
      email,
      role: role || 'contributor',
    });
    
    await user.save();
    return NextResponse.json(user);
  } catch (error) {
    console.error('[API] Users POST error:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
