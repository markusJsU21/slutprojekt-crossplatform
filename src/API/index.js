import axios from 'axios'
axios.baseURL = 'https://api.resrobot.se/v2.1'

const API_KEY = process.env.REACT_APP_API_KEY

export async function getABus(){
   const response = await axios.get(`https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=${API_KEY}`)
    return response
}

