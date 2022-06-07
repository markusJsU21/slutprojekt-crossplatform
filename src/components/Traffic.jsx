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
    getStop()
    return (
        <p>Traffikinfo</p>
    )
}

export default Traffic;