const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const CommentSchema = new Schema({
    description: { type: String },
    idPost: { type: ObjectId },
    idUser: { type: ObjectId },
    likes: { type: Number, default: 0 },
    fileUrl: { type: String },
    timestamp: { type: Date, default: Date.now },
    state: { type: String, default: 'a' },
})
module.exports = mongoose.model('Comment', CommentSchema);