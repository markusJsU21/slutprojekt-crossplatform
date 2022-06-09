import { getATimetable } from "../API/index.js"
import {useState, useEffect} from 'react'

const ListItem = ({line, time, destination}) => {
    return <li> <p>{line}</p> <p>{destination}</p>  <p>{time}</p></li>
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
        getTheBus()
        setInterval(()=>{
            console.log('Calling get the bus')
            getTheBus()
        },3000 * 60)
    },[])
    async function getTheBus(){
        const response = await getATimetable()
        const tenNext = response.Departure.slice(0, 10)
        for(let departure of tenNext){
            if(departure.direction.includes('(')){
               departure.direction = departure.direction.replace(/ *\([^)]*\) */g, "");
            }
            departure.time = departure.time.slice(0, 5)
        }
        setTable(tenNext)
    }


    return (
        <div>
            <p>Avgångar från Liljeholmen om 10 minuter</p>
            <div className="table-header">
                <p>Linje</p>
                <p>Mot</p>
                <p>Avgår</p>
            </div>
            <ul>
        {/* {list} */}
        {/* for(let tenDepartures of departures){
            <li>tenDepartures.time
            </li>        } */}
        {/* {list.map(item => (<ListItem title={item} key={item} />) )} */}

        {table.map(departure => (<ListItem line={departure.ProductAtStop.line} time={departure.time} destination={departure.direction} key={departure.Product.matchId} />) )}
      </ul>
        {/* <table>

            <tr  className="table-header">
                <th colspan="1">Linje</th>
                <th colspan="2">Mot</th>
                <th colspan="3">Avgår</th>
            </tr>

        {table.map(departure => (<TableRow line={departure.ProductAtStop.line} time={departure.time} destination={departure.direction} key={departure.Product.matchId} />) )}
        </table> */}
            {/* <button onClick={getStop}>Get stop</button> */}
        </div>
    )
}

export default Traffic;