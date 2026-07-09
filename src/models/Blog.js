import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for this blog post.'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Please provide a slug for this blog post.'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    shortDescription: {
      type: String,
      required: [true, 'Please provide a short description.'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Please provide the full content.'],
    },
    tags: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      required: [true, 'Please provide a category.'],
      trim: true,
    },
    metaTitle: {
      type: String,
      trim: true,
    },
    metaDescription: {
      type: String,
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Please specify the author.'],
      trim: true,
    },
    publishDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['Draft', 'Published'],
      default: 'Draft',
    },
    featuredImage: {
      type: String,
      required: [true, 'Please provide a featured image URL.'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
