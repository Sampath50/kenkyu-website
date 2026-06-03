import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  abstract: {
    type: String,
    required: true
  },
  keywords: [String],
  authors: [{
    name: { type: String, required: true },
    email: { type: String, required: true },
    affiliation: String,
    orcid: String
  }],
  correspondingAuthor: {
    type: String,
    required: true
  },
  journal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Journal'
  },
  manuscriptFile: {
    filename: String,
    path: String,
    fileType: String,
    size: Number
  },
  supplementaryFiles: [{
    filename: String,
    path: String,
    fileType: String
  }],
  figures: [String],
  tables: [String],
  references: [{
    citation: String,
    doi: String
  }],
  status: {
    type: String,
    enum: ['draft', 'submitted', 'under_review', 'revision_required', 'accepted', 'rejected', 'published'],
    default: 'draft'
  },
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  submittedDate: Date,
  publishedDate: Date,
  volume: String,
  issue: String,
  pageNumbers: String,
  doi: String,
  views: {
    type: Number,
    default: 0
  },
  citations: {
    type: Number,
    default: 0
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }]
}, {
  timestamps: true
});

export default mongoose.model('Article', articleSchema);