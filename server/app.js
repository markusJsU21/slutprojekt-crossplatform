const express = require('express')
const https = require('https')
const fs = require('fs')
const path = require('path')
// const {registerPushNotifications} = require('./push')
const cert = fs.readFileSync(path.join(__dirname, 'cert', 'localhost+1.pem'))
const key = fs.readFileSync(path.join(__dirname, 'cert', 'localhost+1-key.pem'))

const app = express()
app.use(express.json())
app.use( express.static( path.join(__dirname, '..', '/build') ) )

// registerPushNotifications(app)





app.get('/', (req,res) => {
  res.sendFile('./index.html', {root: path.join(__dirname, '..', '/build')})
})

// app.get(`/.netlify/functions/getATimetable`, (req, res) =>{
//   trafficHandler.handler
// })
// app.get(`/.netlify/functions/getWeather`, (req, res) =>{
//   weatherHandler.handler
// })

https.createServer({key,cert}, app)
  .listen(8000, console.log("It's on!"))