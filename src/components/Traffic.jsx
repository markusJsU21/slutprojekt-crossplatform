import { getATimetable, getStopId } from "../API/index.js"

const Traffic = () => {
    async function getTheBus(){
        const response = await getATimetable()
        console.log('getTheBus är: ' , response)
    }
    getTheBus()
    async function getStop(){
        const response = await getStopId()
        console.log('Get stop är: ' , response)
    }

    return (
        <div>
            <p>Traffikinfo</p>
            <button onClick={getStop}>Get stop</button>
        </div>
    )
}

export default Traffic;