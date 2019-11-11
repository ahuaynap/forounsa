const mongoose = require('mongoose');
const {
    Schema
} = mongoose;
const ObjectId = Schema.ObjectId;

const CourseSchema = new Schema({
    idCareer: {
        type: ObjectId
    },
    idCourse: {
        type: String
    },
    idPrerequisite: {
        type: [String]
    },
    name: {
        type: String
    },
    credit: {
        type: Number
    },
    semester: {
        type: Number
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
    state: {
        type: String,
        default: 'a'
    }
})

module.exports = mongoose.model('Course', CourseSchema);