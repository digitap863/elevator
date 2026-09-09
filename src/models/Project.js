import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for this project.'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Please select a category.'],
      trim: true,
      enum: ['Commercial', 'Home', 'Hospital', 'Structural', 'Hospitality'],
    },
    location: {
      type: String,
      required: [true, 'Please specify the location.'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a project description.'],
      trim: true,
    },

    featuredImage: {
      type: String,
      required: [true, 'Please provide at least one featured image URL.'],
    },
    images: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ['Published', 'Draft'],
      default: 'Published',
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
