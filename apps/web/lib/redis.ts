import Redis from 'ioredis';

const REDIS_URL = process.env.REDIS_URL;
const isBuild = process.env.NEXT_PHASE === 'phase-production-build' || process.env.NODE_ENV === 'production';

let redis: Redis | null = null;

if (REDIS_URL && !isBuild) {
  redis = new Redis(REDIS_URL, {
    maxRetriesPerRequest: 1,
    enableOfflineQueue: false,
  });

  redis.on('error', (err) => {
    console.warn('Redis connection error (expected if Redis is off):', err.message);
  });
}

export default redis;

export const CACHE_KEYS = {
  PROMPTS_LIST: 'prompts:list',
};

export async function getCache<T>(key: string): Promise<T | null> {
  if (!redis) return null;
  try {
    const data = await redis.get(key);
    if (!data) return null;
    return JSON.parse(data) as T;
  } catch {
    return null;
  }
}

export async function setCache(key: string, data: any, ttlSeconds = 3600) {
  if (!redis) return;
  try {
    await redis.set(key, JSON.stringify(data), 'EX', ttlSeconds);
  } catch {
    // Silent fail
  }
}

export async function invalidateCache(key: string) {
  if (!redis) return;
  try {
    await redis.del(key);
  } catch {
    // Silent fail
  }
}

