import axios from 'axios'
import {getWeather} from '../API/index'


const Weather = () => {
    async function getWeatherForecast(){
        const response = await getWeather()
        console.log(response)
    }
}

export default Weather