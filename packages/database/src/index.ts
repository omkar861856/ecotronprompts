import mongoose from 'mongoose';

export * from './schema';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://admin:password@localhost:27017/promptlib?authSource=admin';

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Don't exit in development if DB is not ready yet
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};
