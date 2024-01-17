const likedSongController = require('../DL/likedSongs.controller')

async function addLikedSong(data) {
    return await likedSongController.create(data)
}
module.exports = { addLikedSong }