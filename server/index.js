const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const likedSoungsRouter = require('./routes/likedSongs.router')

app.use(cors())
app.use('/likedsongs', likedSoungsRouter)

app.listen(port, () => console.log("****SERVER IS UP****"))