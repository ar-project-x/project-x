import mongoose from 'mongoose';

const orgChartSchema = mongoose.Schema({
  organization: {
    type: mongoose.Types.ObjectId,
    ref: 'Organization'
  },
  person: {
    name: String,
    title: String,
    totalReports: { type: Number, default: 0 }
  },
  hasChild: { type: Boolean, default: false },
  hasParent: { type: Boolean, default: false },
  isHighlight: { type: Boolean, default: false }
});

orgChartSchema.add({
  children: [orgChartSchema]
});

const OrgChart = mongoose.model('OrgChart', orgChartSchema);

export default OrgChart;
