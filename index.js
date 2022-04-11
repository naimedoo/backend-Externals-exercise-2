const express = require("express")
const app = express();
const axios = require('axios')
const json2 = require('./json2.json')

app.listen(3001, () => {
    console.log('App running on port:', 3001)
})

app.get("/",(req,res,next) => {
    console.log(req)
  
})
app.get('/game_of_thrones/url', (req,res) => {
    axios.get("https://thronesapi.com/api/v2/Characters").then(response => {
        res.json({
         data: response.data
        })
    })
   
})
app.get('/game_of_thrones/json',(req,res,next) => {
    res.json({
        result : json2
    })
})
