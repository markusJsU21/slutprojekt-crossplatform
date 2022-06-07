import { getATimetable } from "../API/index.js"

const Traffic = () => {
    async function getTheBus(){
        const response = await getATimetable()
        console.log(response)
    }
    getTheBus()
    return (
        <p>Traffikinfo</p>
    )
}

export default Traffic;