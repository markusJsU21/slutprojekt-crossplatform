import { getATimetable } from "../API/index.js"
import {useState, useEffect} from 'react'
import tbana from '../assets/tbana.png'
import tram from '../assets/tram.png'
import bus from '../assets/bus.png'
import './Traffic.css'

const ListItem = ({line, time, destination, img}) => {
    return <li> <div className="traffic-symbol-and-number"><img src={img} alt="traffic type"/><p>{line}</p></div> <p>{destination}</p>  <p>{time}</p></li>
  }
// const TableRow = ({line, time, destination}) => {
//     return (<tr>
//     <td>{line}</td>
//     <td>{destination}</td>
//     <td>{time}</td>
//   </tr>)
//   }

const Traffic = () => {




    useEffect(()=>{
        const [table, setTable] = useState([])
        const [id, setId] = useState(0)
        function generateId(){
            setId(id + 1)
            return id
        }
        async function getTheBus(){
            const response = await getATimetable()
            const tenNext = response.Departure.slice(0, 10)
            for(let departure of tenNext){
                if(departure.direction.includes('(')){
                    departure.direction = departure.direction.replace(/ *\([^)]*\) */g, "");
                }
                departure.time = departure.time.slice(0, 5)
                departure.id = generateId()
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
        setInterval(()=>{
            console.log('Calling get the bus')
            getTheBus()
        },3000 * 60)
    },[])


    return (
        <div>
            <div className="traffic-box">
                <h2>Avgångar från Liljeholmen om 10 minuter</h2>
                <div className="table-header">
                    <h3>Linje</h3>
                    <h3>Mot</h3>
                    <h3>Avgår</h3>
                </div>
                <ul>

            {table.map(departure => (<ListItem line={departure.ProductAtStop.line} time={departure.time} destination={departure.direction} img={departure.img} key={departure.id} />) )}
        </ul>


            </div>
        </div>
    )
}

export default Traffic;