const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let postschema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('post', postschema);