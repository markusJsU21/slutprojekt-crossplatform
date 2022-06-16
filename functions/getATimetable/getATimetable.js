const axios = require('axios')

const API_KEY = process.env.API_KEY
const handler = async (event) => {

  // const timeNow = new Date()
  const current = event.queryStringParameters.current
  // timeNow.setMinutes(timeNow.getMinutes() + 10)
  // let hours = timeNow.getHours().toString().padStart(2, '0')
  // const minutes = timeNow.getMinutes().toString().padStart(2, '0')
  // let current = hours + ':' + minutes


  //Ta bara duration = 30 min
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
