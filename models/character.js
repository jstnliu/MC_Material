const mongoose = require('mongoose');
const Schema = mongoose.Schema

const characterSchema = new Schema ({
    name: {
        type: String
    },
    images: {
        type: String
    },
    about: {
        type: String
    },
    anime: {
        type: String
    },
    nicknames: {
        type: String
    }
})

module.exports = mongoose.models('Character', characterSchema)