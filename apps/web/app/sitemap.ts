import { MetadataRoute } from 'next';
import { connectDB, Prompt } from '@repo/database';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectDB();
  const prompts = await (Prompt as any).find({}, { id: 1, updatedAt: 1 });
  
  const promptEntries = prompts.map((prompt: any) => ({
    url: `http://localhost:3000/prompts/${prompt.id}`,
    lastModified: prompt.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'http://localhost:3000',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...promptEntries,
  ];
}
