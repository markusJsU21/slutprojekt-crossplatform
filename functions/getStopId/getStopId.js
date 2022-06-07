const axios = require('axios')

const API_KEY = process.env.API_KEY

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
//access_key="123"&query=1234,1234&vårtAPI
const handler = async (event) => {
  const url = "https://api.resrobot.se/v2.1/location.name?input=Göteborg?&format=json"
    try{
      const response = await axios.get(`${url}&accessId=${API_KEY}`)
      console.log('Response från getStopId är ' , response)
      return {
        statusCode: 200,
        body: JSON.stringify(response.data)
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
