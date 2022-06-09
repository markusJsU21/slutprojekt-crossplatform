const axios = require('axios')

const handler = async (event) => {
  try {
    const response = await axios.get('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.063240/lat/59.334591/data.json')

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),

    }
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message
    }
  }
}

module.exports = { handler }
