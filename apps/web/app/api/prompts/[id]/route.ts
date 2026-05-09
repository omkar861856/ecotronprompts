import { NextResponse } from 'next/server';
import { connectDB, Prompt } from '@repo/database';
import { CACHE_KEYS, invalidateCache } from '../../../../lib/redis';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  console.log(`[API] PUT request received for id: ${id}`);
  await connectDB();
  try {
    const body = await request.json();
    console.log('[API] Updating prompt:', id);
    const { _id, __v, ...updateData } = body;
    const prompt = await (Prompt as any).findOneAndUpdate(
      { id },
      { $set: updateData },
      { new: true }
    );
    if (!prompt) {
      console.warn('[API] Prompt not found for update:', id);
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    console.log('[API] Prompt updated successfully:', id);
    
    // Invalidate cache
    await invalidateCache(CACHE_KEYS.PROMPTS_LIST);
    
    return NextResponse.json(prompt);
  } catch (error) {
    console.error('[API] PUT error:', error);
    return NextResponse.json({ error: 'Failed to update prompt' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  const { id } = await params;
  await connectDB();
  try {
    const prompt = await (Prompt as any).findOneAndDelete({ id });
    if (!prompt) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    
    // Invalidate cache
    await invalidateCache(CACHE_KEYS.PROMPTS_LIST);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete prompt' }, { status: 500 });
  }
}
