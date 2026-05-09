import { MetadataRoute } from 'next';
import { connectDB, Prompt } from '@repo/database';
import mongoose from 'mongoose';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ecotron.co.in';

  try {
    await connectDB();
    
    // If not connected (e.g. during build), return only the home page
    if (mongoose.connection.readyState !== 1) {
      return [
        {
          url: baseUrl,
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 1,
        },
      ];
    }

    const prompts = await (Prompt as any).find({}, { id: 1, updatedAt: 1 });
    
    const promptEntries = prompts.map((prompt: any) => ({
      url: `${baseUrl}/prompts/${prompt.id}`,
      lastModified: prompt.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      ...promptEntries,
    ];
  } catch (error) {
    console.warn('Sitemap generation failed (expected during build if DB is off):', error);
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ];
  }
}

