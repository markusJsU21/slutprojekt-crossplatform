import { useEffect, useState } from 'react'
import {getWeather} from '../API/index'
import './Weather.css'



const ListItem = ({hour, temperature}) => {
    return <li> <p>{hour}</p> <p>{temperature} °C</p></li>
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
           for(let param of forecast.parameters){
            if (param.name='t'){
                forecast.temperature = param.values
            }
            break;
           }
        }
        setTable(forecasts)
        console.log(forecasts)

    }

    return (
        <div>
            <h2>Väder</h2>
            <div><i className="wi wi-night-sleet"></i></div>
            <ul>
                {table.map(forecast => (<ListItem
                hour={forecast.validTime}
                temperature={forecast.temperature}
                key={forecast.validTime} />) )}
            </ul>

        </div>
    )
}

export default Weather