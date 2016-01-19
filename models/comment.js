import mongoose from 'mongoose';

var commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

export default mongoose.model('Comment', commentSchema);
