import mongoose from 'mongoose';

const addressSchema = mongoose.Schema(
  {
    street1: {
      type: String,
      required: [true, 'Street is required']
    },
    street2: {
      type: String
    },
    city: {
      type: String,
      required: [true, 'City is required']
    },
    state: {
      type: String,
      required: [true, 'State is required']
    },
    zipCode: {
      type: String,
      required: [true, 'Zip code is required']
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
