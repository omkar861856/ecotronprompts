import fs from 'fs/promises';
import path from 'path';

// This will be a volume mapped in Docker
const UPLOAD_DIR = process.env.UPLOAD_DIR || '/app/uploads';

export const initStorage = async () => {
  try {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
    console.log(`[STORAGE] Local upload directory ready at ${UPLOAD_DIR}`);
  } catch (err) {
    console.error(`[STORAGE] Failed to create upload directory:`, err);
  }
};

export const uploadFile = async (fileName: string, buffer: Buffer, metadata?: any) => {
  const filePath = path.join(UPLOAD_DIR, fileName);
  await fs.writeFile(filePath, buffer);
  console.log(`[STORAGE] File saved to ${filePath}`);
  return { success: true };
};

export const getFileUrl = async (fileName: string) => {
  // In local mode, the URL is just the path
  return `/prompt-assets/${fileName}`;
};
