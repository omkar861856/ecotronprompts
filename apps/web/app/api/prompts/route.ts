import { NextResponse } from 'next/server';
import { connectDB, Prompt } from '@repo/database';
import { v4 as uuidv4 } from 'uuid';
import redis, { CACHE_KEYS, getCache, setCache, invalidateCache } from '../../../lib/redis';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  console.log('[API] GET request for prompts');
  await connectDB();
  try {
    // Try to get from cache first
    const cached = await getCache<any[]>(CACHE_KEYS.PROMPTS_LIST);
    if (cached) {
      console.log('[API] Serving prompts from Redis cache');
      return NextResponse.json(cached);
    }

    const prompts = await (Prompt as any).find({}).sort({ updatedAt: -1 });
    console.log(`[API] Fetched ${prompts.length} prompts from DB. Valid with media: ${prompts.filter((p: any) => p.mediaUrl).length}`);
    
    // Save to cache
    await setCache(CACHE_KEYS.PROMPTS_LIST, prompts);
    
    return NextResponse.json(prompts);
  } catch (error) {
    console.error('[API] GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch prompts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await connectDB();
  try {
    const body = await request.json();
    console.log('[API] Creating new prompt:', body.title);
    const { _id, __v, ...data } = body;
    const prompt = new Prompt({
      ...data,
      id: body.id || uuidv4(),
    });
    await prompt.save();
    console.log('[API] Prompt created successfully:', prompt.id);
    
    // Invalidate cache
    await invalidateCache(CACHE_KEYS.PROMPTS_LIST);
    
    return NextResponse.json(prompt);
  } catch (error) {
    console.error('[API] POST error:', error);
    return NextResponse.json({ error: 'Failed to create prompt' }, { status: 500 });
  }
}
