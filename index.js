const express = require('express')
const app = express()
const ytdl = require('ytdl-core');

app.get('/', function (req, res) {
    const { url } = req.query
    const date = Date.now()
    res.header('Content-Disposition', `attachment; filename=video_${date}.mp4`);
    res.send(url)
    return ytdl(url).pipe(res);
})

app.listen(3000)
console.log('Logado');
