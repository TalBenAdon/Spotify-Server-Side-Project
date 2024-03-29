const mongoose = require('mongoose')
const db = require('./db')
db.connect()

const likedSongSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    songLength: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    }


})

const likedSongModel = mongoose.model('likedSong', likedSongSchema)

module.exports = likedSongModel