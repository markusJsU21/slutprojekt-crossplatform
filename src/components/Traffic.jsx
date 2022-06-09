import { getATimetable } from "../API/index.js"
import {useState, useEffect} from 'react'

const ListItem = ({title}) => {
    return <li>{title}</li>
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
    const list = [
        "Bananpaj",
        "Grillkorv"
      ]

    return (
        <div>
            <p>Traffikinfo</p>
            <ul>
        {/* {list} */}
        {/* for(let tenDepartures of departures){
            <li>tenDepartures.time
            </li>        } */}
        {/* {list.map(item => (<ListItem title={item} key={item} />) )} */}

        {table.map(departure => (<ListItem title={departure.name} key={departure.stopid} />) )}
      </ul>
            {/* <button onClick={getStop}>Get stop</button> */}
        </div>
    )
}

export default Traffic;