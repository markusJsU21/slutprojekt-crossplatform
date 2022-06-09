import axios from 'axios'
// axios.baseURL = 'http://localhost:8888/.netlify/functions'

export async function getATimetable(){
    if(process.env.NODE_ENV === 'production'){
        const response = await axios.get(`https://stunning-treacle-66df98.netlify.app/.netlify/functions/getATimetable`)
        return response.data
    }
    else{
        const response = await axios.get(`http://localhost:8888/.netlify/functions/getATimetable`)
        return response.data
    }
//    const response = await axios.get(`https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=${API_KEY}`)
}
// export async function getStopId(){
//     const response = await axios.get(`http://localhost:8888/.netlify/functions/getStopId`)
// //    const response = await axios.get(`https://api.resrobot.se/v2.1/departureBoard?id=740000002&format=json&accessId=${API_KEY}`)
//     return response
// }

