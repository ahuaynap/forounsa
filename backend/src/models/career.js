const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const CareerSchema = new Schema({

    code: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    state: {
        type: String,
        default: 'a'
    }
})

module.exports = mongoose.model('Career', CareerSchema);