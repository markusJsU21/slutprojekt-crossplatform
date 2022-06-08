const axios = require('axios')

const API_KEY = process.env.API_KEY

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
//access_key="123"&query=1234,1234&vårtAPI
const handler = async (event) => {

  const timeNow = new Date()
  // timeNow = timeNow.toLocaleTimeString()
  timeNow.setMinutes(timeNow.getMinutes() + 10);
  // console.log(timeNow.toLocaleTimeString())
  let current = timeNow.getHours() + ':' + timeNow.getMinutes();
  console.log(current)
  const url = `https://api.resrobot.se/v2.1/departureBoard?time=${current}&maxJourneys=10&id=740004046&format=json`
  try{

    const response = await axios.get(`${url}&accessId=${API_KEY}`)
    // let departures = response.data.Departure.slice(0, 3)
    // console.log('DEPARTURES ÄR: ' , departures)

    // console.log('Response från getATimetable är ' , response)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  }catch(error){
    // console.log('Error från getATimetable är ' , error.message )
    return {
      statusCode: 500,
      body: error.message
    }
  }
}

module.exports = { handler }
