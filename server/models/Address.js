import mongoose from 'mongoose';

const addressSchema = mongoose.Schema(
  {
    street1: {
      type: String,
      required: true
    },
    street2: {
      type: String
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipCode: {
      type: String,
      required: true
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

const Address = mongoose.model('Address', addressSchema);

export default Address;
