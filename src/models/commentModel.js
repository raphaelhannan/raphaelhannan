const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let commentSchema = new Schema({
    pseudo: {
        type: String,
        required: true,
        //rajouter le post id
        //rajouter une librairie npm
        
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

module.exports = mongoose.model('comment', commentSchema);
