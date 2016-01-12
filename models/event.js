import mongoose from 'mongoose';

var eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  attendees: {
    type: Number,
    default: 0
  }
});

export default mongoose.model('Event', eventSchema);
