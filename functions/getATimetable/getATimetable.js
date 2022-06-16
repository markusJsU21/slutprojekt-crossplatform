const axios = require('axios')

const API_KEY = process.env.API_KEY
const handler = async (event) => {

  const current = event.queryStringParameters.current
  const url = `https://api.resrobot.se/v2.1/departureBoard?time=${current}&maxJourneys=10&id=740004046&format=json`
  try{

    const response = await axios.get(`${url}&accessId=${API_KEY}`)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  }catch(error){
    return {
      statusCode: 500,
      body: error.message
    }
  }
}

module.exports = { handler }
