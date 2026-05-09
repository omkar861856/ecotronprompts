import { NextResponse } from 'next/server';
import { uploadFile, getFileUrl, initStorage } from '@repo/storage';
import { v4 as uuidv4 } from 'uuid';

let isStorageInitialized = false;

export async function POST(request: Request) {
  const t = () => new Date().toISOString();
  console.log(`[${t()}] [UPLOAD] Starting upload request...`);
  try {
    if (!isStorageInitialized) {
      console.log(`[${t()}] [UPLOAD] Initializing storage for the first time...`);
      await initStorage();
      isStorageInitialized = true;
      console.log(`[${t()}] [UPLOAD] Storage initialized.`);
    }

    console.log(`[${t()}] [UPLOAD] Parsing form data...`);
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      console.warn(`[${t()}] [UPLOAD] No file found in form data.`);
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
    console.log(`[${t()}] [UPLOAD] File received: ${file.name}, size: ${file.size}, type: ${file.type}`);

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${uuidv4()}-${file.name}`;
    const mediaType = file.type.startsWith('video') ? 'video' : 'image';
    
    console.log(`[${t()}] [UPLOAD] Uploading to MinIO as ${fileName}...`);
    
    // Add a 15-second timeout to the upload operation
    const uploadPromise = uploadFile(fileName, buffer, {
      'Content-Type': file.type,
    });
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Upload to MinIO timed out after 15s')), 15000)
    );

    await Promise.race([uploadPromise, timeoutPromise]);
    
    console.log(`[${t()}] [UPLOAD] Upload complete.`);

    const host = request.headers.get('host') || 'localhost:3000';
    const baseUrl = host.split(':')[0]; // Get the IP or domain without the port
    const url = `http://${baseUrl}:9000/prompt-assets/${fileName}`;
    console.log(`[${t()}] [UPLOAD] Returning dynamic URL: ${url}`);
    
    return NextResponse.json({ url, mediaType });
  } catch (error: any) {
    console.error(`[${t()}] [UPLOAD] Error:`, error.message, error.stack);
    return NextResponse.json({ error: 'Failed to upload file: ' + error.message }, { status: 500 });
  }
}
