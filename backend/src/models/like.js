const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const LikeSchema = new Schema({
    idEntity: { type: ObjectId },
    idUser: { type: ObjectId },
    state: { type: Boolean, default: false }
})

module.exports = mongoose.model('Like', LikeSchema);