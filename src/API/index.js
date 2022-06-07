import axios from 'axios'
// axios.baseURL = 'http://localhost:8888/.netlify/functions'

export async function getATimetable(){

    const response = await axios.get(`http://localhost:8888/.netlify/functions/getATimetable`)
//    const response = await axios.get(`https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=${API_KEY}`)
    return response.data
}
export async function getStopId(){
    const response = await axios.get(`http://localhost:8888/.netlify/functions/getStopId`)
//    const response = await axios.get(`https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=${API_KEY}`)
    return response
}

