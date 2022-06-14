import { useEffect, useState } from 'react'
import {getWeather} from '../API/index'
import './Weather.css'
import Sunny from '../assets/sunny_regular.svg'
import MoonRainNight from '../assets/night_raining_icon.svg'
import CloudyLightning from '../assets/cloudy_lightning_icon.svg'
import CloudySunny from '../assets/cloudy_sunny_icon.svg'
import CloudRainSun from '../assets/cloud_raining_sun_icon.svg'
import Snow from '../assets/snow_icon.svg'




const ListItem = ({hour, temperature, symbol}) => {
    return <li> <p>{hour}</p><img  className="weather-symbol "src={symbol} alt="weather symbol" /><p>{temperature} °C</p></li>
  }

const Weather = () => {
    const [table, setTable] = useState([])
    useEffect(()=>{
        getWeatherForecast()
        setInterval(()=>{
            getWeatherForecast()
        }, 1000 * 60 * 60)
    }, [])
    async function getWeatherForecast(){
        const response = await getWeather()
        const forecasts = response.timeSeries.slice(0, 5)
        for(let forecast of forecasts){
           forecast.validTime = forecast.validTime.slice(11, 16)
           if(forecast.parameters[18].values < 3){
               forecast.img = Sunny
           } else if (forecast.parameters[18].values < 6) {
           forecast.img = CloudySunny
        } else if (forecast.parameters[18].values < 11)
        forecast.img = CloudRainSun
    }
           for(let param of forecast.parameters){
            if (param.name==='t' && param.unit === 'Cel') {
                forecast.temperature = param.values
                break;
            }
           }
        }
        setTable(forecasts)
        console.log(forecasts)

    }

    return (
        <div>
            <div className="weather-box">
                <h2>Stockholm</h2>
                <ul>
                    {table.map(forecast => (<ListItem
                    hour={forecast.validTime}
                    symbol={forecast.img}
                    temperature={forecast.temperature}
                    key={forecast.validTime} />) )}
                </ul>

            </div>

        </div>
    )
}

export default Weather