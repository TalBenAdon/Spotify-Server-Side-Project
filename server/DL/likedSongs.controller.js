const likedSongModel = require('./likedSongs.model')

async function read(filter) {
    return await likedSongModel.find(filter)
}
async function readOne(filter) {
    return await likedSongModel.findOne(filter)
}
async function create(filter) {
    return await likedSongModel.create(filter)
}

module.exports = { read, readOne, create }