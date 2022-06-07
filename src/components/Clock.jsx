import {useState, useEffect} from 'react'

const Clock = () => {

    const [time, setTime] = useState(new Date())
    useEffect( () =>{
        setInterval(() => updateClock(), 1000)
    },[])

   function updateClock(){
      setTime(new Date())
   }

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    )
}

export default Clock;
