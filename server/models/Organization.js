import mongoose from 'mongoose';

const organizationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Organization name is required']
    },
    address: {
      type: mongoose.Types.ObjectId,
      ref: 'Address'
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

const Organization = mongoose.model('Organization', organizationSchema);

export default Organization;
