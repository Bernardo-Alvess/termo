const express = require('express');
const words = require('./words')
const app = express();

app.listen(3000, () => {
    console.log('listening')
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
        console.log(1)
        res.send(true)
    }else{
        console.log(0)
        res.send(false)
    }
})
