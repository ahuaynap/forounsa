const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const NotificationSchema = new Schema({
    idPost: { type: ObjectId },
    idUser: { type: ObjectId },
    type: { type: String },
    state: { type: String, default: 'a' }
})

module.exports = mongoose.model('Notification', NotificationSchema);