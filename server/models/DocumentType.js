import mongoose from 'mongoose';

const documentTypeSchema = mongoose.Schema(
  {
    name: String,
    abbreviation: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

const DocumentType = mongoose.model('DocumentType', documentTypeSchema);

export default DocumentType;
