const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const CourseSchema = new Schema({
    name: { type: String },
    description: { type: String },
    idCareer: { type: ObjectId },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    state: { type: String, default: 'a' }
})

module.exports = mongoose.model('Course', CourseSchema);