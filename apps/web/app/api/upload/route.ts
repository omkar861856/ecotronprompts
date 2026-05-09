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
    const sanitizedName = file.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9.\-_]/g, '');
    const fileName = `${uuidv4()}-${sanitizedName}`;

    const mediaType = file.type.startsWith('video') ? 'video' : 'image';
    
    console.log(`[${t()}] [UPLOAD] Saving to local storage as ${fileName}...`);
    
    await uploadFile(fileName, buffer);
    
    console.log(`[${t()}] [UPLOAD] Upload complete.`);

    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    const host = request.headers.get('host') || 'ecotron.co.in';
    const url = `${protocol}://${host}/prompt-assets/${fileName}`;
    console.log(`[${t()}] [UPLOAD] Returning absolute URL: ${url}`);



    
    return NextResponse.json({ url, mediaType });
  } catch (error: any) {
    console.error(`[${t()}] [UPLOAD] Error:`, error.message, error.stack);
    return NextResponse.json({ error: 'Failed to upload file: ' + error.message }, { status: 500 });
  }
}
