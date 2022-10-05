const express = require('express')
const words = require('./words')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`listening at ${port}`)
})

app.use(express.static('www'))
app.use(express.json({limit: '1mb'}))

app.get('/word', async (req, res) => {
    const word = words.selectRandomWord()
    res.send(word)
})

app.post('/verify', async (req, res) => {
    const verification = await words.doesWordExist(req.body.wordTyped)
    if(verification){
        res.send(true)
    }else{
        res.send(false)
    }
})
