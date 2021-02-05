import mongoose from 'mongoose';

const documentSchema = mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true
    },
    fileExtension: {
      type: String,
      required: true
    },
    fileUrl: {
      type: String,
      required: true,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'Please use a valid URL with HTTP or HTTPS'
      ]
    },
    thirdParty: {
      type: Boolean,
      required: true,
      default: false
    },
    documentType: {
      type: mongoose.Types.ObjectId,
      ref: 'DocumentType'
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

const Document = mongoose.model('Document', documentSchema);

export default Document;
