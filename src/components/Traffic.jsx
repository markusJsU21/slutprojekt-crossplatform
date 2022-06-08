import { getATimetable } from "../API/index.js"
import {useState, useEffect} from 'react'

const Traffic = () => {
    const [table, setTable] = useState(null)

    useEffect(()=>{
        getTheBus()
    },[])
    async function getTheBus(){
        const response = await getATimetable()
        const tenNext = response.Departure.slice(0, 10)
        console.log(tenNext)
        setTable(()=>tenNext)

    }

    return (
        <div>
            <p>Traffikinfo</p>

            {/* <button onClick={getStop}>Get stop</button> */}
        </div>
    )
}

export default Traffic;