const axios = require('axios')

const API_KEY = process.env.API_KEY

const handler = async (event) => {
  const url = "https://api.resrobot.se/v2.1/location.name?input=Göteborg&format=json"
    try{
      const response = await axios.get(`${url}&accessId=${API_KEY}`)
      console.log('Response från getStopId är ' , response)
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }

  } catch(error){
    console.log('Error från getStopId är ' , error )
    return {
      statusCode: 500,
      body: error.message
    }
  }
}

module.exports = { handler }
