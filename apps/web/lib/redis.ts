import Redis from 'ioredis';

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

const redis = new Redis(REDIS_URL, {
  maxRetriesPerRequest: null,
});

export default redis;

export const CACHE_KEYS = {
  PROMPTS_LIST: 'prompts:list',
};

export async function getCache<T>(key: string): Promise<T | null> {
  const data = await redis.get(key);
  if (!data) return null;
  return JSON.parse(data) as T;
}

export async function setCache(key: string, data: any, ttlSeconds = 3600) {
  await redis.set(key, JSON.stringify(data), 'EX', ttlSeconds);
}

export async function invalidateCache(key: string) {
  await redis.del(key);
}
