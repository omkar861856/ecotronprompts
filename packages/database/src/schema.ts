import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'contributor';
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'contributor'], default: 'contributor' },
}, { timestamps: true });

export interface IComment {
  id: string;
  userId: string;
  username: string;
  content: string;
  createdAt: Date;
}

export interface IPrompt extends Document {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  mediaUrl?: string;
  mediaType?: "image" | "video";
  authorId?: string;
  isPublished: boolean;
  requiresMedia: boolean;
  modelUsed?: string;
  generationParams?: {
    prompt?: string;
    negativePrompt?: string;
    seed?: number;
    guidanceScale?: number;
    steps?: number;
    sampler?: string;
    aspectRatio?: string;
  };
  stats: {
    likes: number;
    views: number;
    favourites: number;
  };
  comments: IComment[];
  createdAt: Date;
  updatedAt: Date;
}

const PromptSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },
  mediaUrl: { type: String },
  mediaType: { type: String, enum: ["image", "video"] },
  authorId: { type: String },
  isPublished: { type: Boolean, default: false },
  requiresMedia: { type: Boolean, default: true },
  modelUsed: { type: String },
  generationParams: {
    prompt: { type: String },
    negativePrompt: { type: String },
    seed: { type: Number },
    guidanceScale: { type: Number },
    steps: { type: Number },
    sampler: { type: String },
    aspectRatio: { type: String },
  },
  stats: {
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    favourites: { type: Number, default: 0 },
  },
  comments: [{
    id: { type: String, required: true },
    userId: { type: String, required: true },
    username: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  }],
}, { timestamps: true });


export interface IUserActivity extends Document {
  userId: string;
  action: string;
  targetId?: string;
  metadata?: any;
  timestamp: Date;
}

const UserActivitySchema: Schema = new Schema({
  userId: { type: String, required: true },
  action: { type: String, required: true },
  targetId: { type: String },
  metadata: { type: Schema.Types.Mixed },
  timestamp: { type: Date, default: Date.now },
});

export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export const Prompt = mongoose.models.Prompt || mongoose.model<IPrompt>('Prompt', PromptSchema);
export const UserActivity = mongoose.models.UserActivity || mongoose.model<IUserActivity>('UserActivity', UserActivitySchema);

