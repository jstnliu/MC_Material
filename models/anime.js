const mongoose = require('mongoose');
const Schema = mongoose.Schema

const animeSchema = new Schema ({
    title_english: {
        type: String
    },
    title_japanese: {
        type: String
    },
    images: {
        type: String
    },
    synopsis: {
        type: String
    },
    episodes: {
        type: String
    },
    mal_id: {
        type: Number
    }
})

module.exports = mongoose.model('Anime', animeSchema)