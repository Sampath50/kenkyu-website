import mongoose from 'mongoose';

const journalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  issn: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  scope: [String],
  editorInChief: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  editorialBoard: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  publicationFrequency: {
    type: String,
    enum: ['Monthly', 'Quarterly', 'Bi-annual', 'Annual'],
    default: 'Quarterly'
  },
  openAccess: {
    type: Boolean,
    default: true
  },
  submissionGuidelines: String,
  apc: {  // Article Processing Charge
    type: Number,
    default: 0
  },
  impactFactor: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  coverImage: String
}, {
  timestamps: true
});

export default mongoose.model('Journal', journalSchema);