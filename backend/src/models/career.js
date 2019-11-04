const mongoose = require('mongoose');
const { Schema } = mongoose;

const CareerSchema = new Schema({
    name: { type: String },
    description: { type: String },
    state: { type: String, default: 'a' }
})

module.exports = mongoose.model('Career', CareerSchema);