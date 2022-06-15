import { useEffect, useState } from 'react'
import {getWeather} from '../API/index'
import styles from './Weather.module.css'

import icons from './images'




const ListItem = ({hour, temperature, symbol}) => {
    return <li> <p>{hour}</p><img  className={styles.weatherSymbol} src={symbol} alt="weather symbol" /><p>{temperature} °C</p></li>
  }

const Weather = () => {
    const [table, setTable] = useState([])
    useEffect(()=>{
        getWeatherForecast()
        setInterval(
            getWeatherForecast
        , 1000 * 60 * 60)
    }, [])
    async function getWeatherForecast(){
        const response = await getWeather()
        const forecasts = response.timeSeries.slice(0, 5)
        for(let forecast of forecasts){
           forecast.validTime = forecast.validTime.slice(11, 16)
            forecast.img = icons[forecast.parameters[18].values]
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
            <div className={styles.weatherBox}>
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