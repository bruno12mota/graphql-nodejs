import mongoose from 'mongoose';

var blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

export default mongoose.model('BlogPost', blogPostSchema);
