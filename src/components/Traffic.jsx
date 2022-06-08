import { getATimetable } from "../API/index.js"

const Traffic = () => {
    async function getTheBus(){
        const response = await getATimetable()
    }
    getTheBus()

    return (
        <div>
            <p>Traffikinfo</p>
            {/* <button onClick={getStop}>Get stop</button> */}
        </div>
    )
}

export default Traffic;