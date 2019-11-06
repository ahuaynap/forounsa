const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
    name: { type: String },
    description: { type: String },
    idCourse: { type: ObjectId},
    idUser: { type: ObjectId },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    fileUrl: { type: String },
    timestamp: { type: Date, default: Date.now },
    state: { type: String, default: 'a' }
})

module.exports = mongoose.model('Post', PostSchema);