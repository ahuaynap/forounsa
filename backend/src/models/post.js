const mongoose = require('mongoose');
const {
    Schema
} = mongoose;
const ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
    idCourse: {
        type: ObjectId
    },
    idUser: {
        type: ObjectId
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    fileUrl: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    state: {
        type: String,
        default: 'a'
    }
})

module.exports = mongoose.model('Post', PostSchema);