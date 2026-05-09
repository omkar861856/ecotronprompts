import { NextResponse } from 'next/server';
import { connectDB, UserActivity } from '@repo/database';

export async function POST(request: Request) {
  await connectDB();
  try {
    const body = await request.json();
    const activity = new UserActivity({
      userId: body.userId || 'anonymous',
      action: body.action,
      targetId: body.targetId,
      metadata: body.metadata,
    });
    await activity.save();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to log activity' }, { status: 500 });
  }
}
