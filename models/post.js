const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    users: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

const postSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    character: {
        type: Schema.Types.ObjectId,
        ref: 'Character',
        required: true
    },
    rating: {
        type: Number,
        required: true
    }, 
    review: {
        type: String,
        required: true
    },
    comments: [commentSchema]    
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)