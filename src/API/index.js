import axios from 'axios'
axios.baseURL = 'https://api.resrobot.se/v2.1'
const API_KEY = 'db263537-133e-45ff-b68a-6377630296b8'


export async function getABus(){
   const response = await axios.get(`https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=${API_KEY}`)
    return response
}

