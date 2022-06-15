require('dotenv').config({path: __dirname + '/../.env'})

module.exports = {
  publicKey: process.env.publicKey,
  privateKey: process.env.privateKey,
  PORT: process.env.PORT || 8000
}