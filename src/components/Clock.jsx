import {useState} from 'react'

const Clock = () => {

   const time = new Date()

   function updateClock(){
       time = new Date()
       return time
   }
//    const [seconds, setSeconds] = useState(time.getSeconds())

    return (
        <div>
            <h1>Detta är en klocka</h1>
            <p>hej</p>
            <p>{time.toString()}</p>
        </div>
    )
}

export default Clock;

//{setSeconds(time.getSeconds())}