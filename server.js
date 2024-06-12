const express = require("express")
const app = express();

app.get('/', (req, res) => {
    res.send('i am working initialy')
})

app.listen(3001, (req, res) => {
    console.log('running on port ')
})