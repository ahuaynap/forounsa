const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String },
    subscription:{ type: [ObjectId] },
    state: { type: String, default: 'a' }
})

module.exports = mongoose.model('User', UserSchema);