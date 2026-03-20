const express = require('express')
const app = express()

app.get('/Oi',(req,res) => {
    res.json({message:"Oi"})
})

app.listen(3000, () => {
    console.log("Server Ok")
})

app.get('/Geovanna',(req,res) => {
    res.json({message:"oi Gee"})
})