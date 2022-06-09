import { getATimetable } from "../API/index.js"
import {useState, useEffect} from 'react'

const ListItem = ({line, time, destination}) => {
    return <li>Linje: {line} Avgår: {time} Mot: {destination}</li>
  }

const Traffic = () => {
    const [table, setTable] = useState([])

    useEffect(()=>{
        getTheBus()
    },[])
    async function getTheBus(){
        const response = await getATimetable()
        const tenNext = response.Departure.slice(0, 10)

        console.log(typeof tenNext)
        setTable(tenNext)
        console.log(tenNext)

    }

    return (
        <div>
            <p>Avgångar från Liljeholmen om 10 minuter</p>
            <ul>
        {/* {list} */}
        {/* for(let tenDepartures of departures){
            <li>tenDepartures.time
            </li>        } */}
        {/* {list.map(item => (<ListItem title={item} key={item} />) )} */}

        {table.map(departure => (<ListItem line={departure.ProductAtStop.line} time={departure.time} destination={departure.direction} key={departure.Product.matchId} />) )}
      </ul>
            {/* <button onClick={getStop}>Get stop</button> */}
        </div>
    )
}

export default Traffic;