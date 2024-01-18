const express = require('express')
const { addLikedSong } = require('../BL/likedSongs.service')
const router = express.Router()

router.post('/liked', (req, res) => {
    try {
        addLikedSong(req.body)
        res.send("Song liked successfully")
        console.log(req.body);
    } catch (error) {
        res.status(500).send('bad request, error occured')
    }
})

module.exports = router