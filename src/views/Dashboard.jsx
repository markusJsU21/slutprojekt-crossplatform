import Clock from '../components/Clock'
import Traffic from '../components/Traffic'
import './Dashboard.css';
// import Weather from '../components/Weather'

const Dashboard = () => {
    return(
        <div>
            <h1>It-Högskolan</h1>
            <Clock />
            <Traffic />
        </div>

    )
}

export default Dashboard;