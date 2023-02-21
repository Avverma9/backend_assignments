const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  post: { type: Schema.Types.ObjectId, ref: 'Post' },
  parentComment: { type: Schema.Types.ObjectId, ref: 'Comment' }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;