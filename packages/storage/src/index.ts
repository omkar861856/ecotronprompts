import * as Minio from 'minio';

const minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT || 'localhost',
  port: parseInt(process.env.MINIO_PORT || '9000'),
  useSSL: process.env.MINIO_USE_SSL === 'true',
  accessKey: process.env.MINIO_ACCESS_KEY || 'admin',
  secretKey: process.env.MINIO_SECRET_KEY || 'password',
});

const BUCKET_NAME = 'prompt-assets';

export const initStorage = async () => {
  const exists = await minioClient.bucketExists(BUCKET_NAME);
  if (!exists) {
    await minioClient.makeBucket(BUCKET_NAME, 'us-east-1');
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
    console.log(`Bucket ${BUCKET_NAME} created and set to public`);
  }
};

export const uploadFile = async (fileName: string, buffer: Buffer, metadata?: any) => {
  return await minioClient.putObject(BUCKET_NAME, fileName, buffer, metadata);
};

export const getFileUrl = async (fileName: string) => {
  return await minioClient.presignedGetObject(BUCKET_NAME, fileName, 24 * 60 * 60);
};

export { minioClient };
