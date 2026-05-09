import mongoose from 'mongoose';

export * from './schema';

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  // During Next.js build, we might not have the DB URI, and that's okay for static analysis
  if (!MONGODB_URI) {
    console.warn('MongoDB URI is not defined. Skipping connection (this is normal during build).');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Don't exit during build or development
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE !== 'phase-production-build') {
      console.error('Critical: Database connection failed in production.');
      // In some environments, we might still want to avoid hard exit
      // process.exit(1); 
    }
  }
};

