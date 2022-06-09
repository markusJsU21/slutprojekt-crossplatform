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

export async function getWeather(){
    if(process.env.NODE_ENV === 'production'){
        const response = await axios.get(`https://stunning-treacle-66df98.netlify.app/.netlify/functions/getWeather`)
        return response.data
    }else{
        const response = await axios.get(`http://localhost:8888/.netlify/functions/getWeather`)
        return response.data
    }
    //lat lon 59.334591, 18.063240
    //59.3078105,18.0244707
}

