import { getABus } from "../API"

const Traffic = () => {
    async function getTheBus(){
        const response = await getABus()
        console.log(response)
    }
    getTheBus()
    return (
        <p>Traffikinfo</p>
    )
}

export default Traffic;