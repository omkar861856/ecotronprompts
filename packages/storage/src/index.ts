import * as Minio from 'minio';

const minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT || 'minio',
  port: parseInt(process.env.MINIO_PORT || '9000'),
  useSSL: process.env.MINIO_USE_SSL === 'true',
  accessKey: process.env.MINIO_ACCESS_KEY || 'admin',
  secretKey: process.env.MINIO_SECRET_KEY || 'password',
});

const BUCKET_NAME = 'prompt-assets';

export const initStorage = async () => {
  try {
    console.log(`[STORAGE] Checking bucket: ${BUCKET_NAME}`);
    const exists = await minioClient.bucketExists(BUCKET_NAME);
    if (!exists) {
      console.log(`[STORAGE] Creating bucket: ${BUCKET_NAME}`);
      await minioClient.makeBucket(BUCKET_NAME, 'us-east-1');
    }
    
    // Always enforce public policy for the assets bucket
    const policy = {
      Version: '2012-10-17',
      Statement: [
        {
          Action: ['s3:GetObject'],
          Effect: 'Allow',
          Principal: '*',
          Resource: [`arn:aws:s3:::${BUCKET_NAME}/*`],
        },
      ],
    };
    await minioClient.setBucketPolicy(BUCKET_NAME, JSON.stringify(policy));
    console.log(`[STORAGE] Bucket ${BUCKET_NAME} is ready and public.`);
  } catch (err) {
    console.error(`[STORAGE] Initialization error:`, err);
  }
};


export const uploadFile = async (fileName: string, buffer: Buffer, metadata?: any) => {
  return await minioClient.putObject(BUCKET_NAME, fileName, buffer, metadata);
};

export const getFileUrl = async (fileName: string) => {
  return await minioClient.presignedGetObject(BUCKET_NAME, fileName, 24 * 60 * 60);
};

export { minioClient };
