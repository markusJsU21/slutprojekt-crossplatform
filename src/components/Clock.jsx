import {useState, useEffect} from 'react'
import styles from './Clock.module.css'

const Clock = () => {

    const [time, setTime] = useState(new Date())
    useEffect( () =>{
        setInterval(() => updateClock(), 1000)
    },[])

   function updateClock(){
      setTime(new Date())
   }

    return (
        <div className="clock">
            <div className={styles.clockBox}>
                <h2>Lokal tid</h2>
                <p>{time.toLocaleTimeString()}</p>
            </div>
        </div>
    )
}

export default Clock;
