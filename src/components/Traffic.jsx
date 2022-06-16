import { getATimetable } from "../API/index.js"
import {useState, useEffect} from 'react'
import tbana from '../assets/tbana.png'
import tram from '../assets/tram.png'
import bus from '../assets/bus.png'
import styles from './Traffic.module.css'

//Gör om css filer till modules och camelcasa alla classer.

const ListItem = ({line, time, destination, img}) => {
    return <li> <div className={styles.trafficSymbolAndNumber}><img src={img} alt="traffic type"/><p>{line}</p></div> <p>{destination}</p>  <p>{time}</p></li>
  }
// const TableRow = ({line, time, destination}) => {
//     return (<tr>
//     <td>{line}</td>
//     <td>{destination}</td>
//     <td>{time}</td>
//   </tr>)
//   }

const Traffic = () => {
    const [table, setTable] = useState([])

    useEffect(()=>{
        async function getTheBus(){
            const response = await getATimetable()
            const tenNext = response.Departure.slice(0, 10)
            for(let departure of tenNext){
                if(departure.direction.includes('(')){
                    departure.direction = departure.direction.replace(/ *\([^)]*\) */g, "");
                }
                departure.time = departure.time.slice(0, 5)
                if(departure.ProductAtStop.catOutL.includes('Tunnelbana')){
                    departure.img = tbana
                }else if(departure.ProductAtStop.catOutL.includes('Spårväg')){
                    departure.img = tram
                }else{
                    departure.img = bus
                }
            }
            console.log(tenNext)
            setTable(tenNext)
        }
        getTheBus()
        setInterval(
            getTheBus
        ,1000 * 60)
    },[])


    return (
        <div className="traffic">
            <div className={styles.trafficBox}>
                <h2>Avgångar från Liljeholmen om 10 minuter</h2>
                <div className="table-header">
                    <h3>Linje</h3>
                    <h3>Mot</h3>
                    <h3>Avgår</h3>
                </div>
                <ul>

            {table.map((departure, index) => (<ListItem line={departure.ProductAtStop.line} time={departure.time} destination={departure.direction} img={departure.img} key={index} />) )}
        </ul>


            </div>
        </div>
    )
}

export default Traffic;