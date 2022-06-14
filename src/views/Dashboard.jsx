import '..//Dashboard.css'
import Clock from '../components/Clock'
import Traffic from '../components/Traffic'
// import Weather from '../components/Weather'

const Dashboard = () => {
    return(
        <div>
            <h1>ITHS</h1>
             <div class="clock">
            <Clock />
           </div>
           <div class="traffic">
            <Traffic />
        </div>
        </div>
    )
}

export default Dashboard;