import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
    required: true
  },
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reviewScores: {
    originality: { type: Number, min: 1, max: 5 },
    methodology: { type: Number, min: 1, max: 5 },
    clarity: { type: Number, min: 1, max: 5 },
    relevance: { type: Number, min: 1, max: 5 },
    references: { type: Number, min: 1, max: 5 }
  },
  commentsToAuthor: String,
  commentsToEditor: String,
  recommendation: {
    type: String,
    enum: ['accept', 'minor_revision', 'major_revision', 'reject']
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  submittedDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.model('Review', reviewSchema);