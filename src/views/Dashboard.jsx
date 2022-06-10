import Clock from '../components/Clock'
import Traffic from '../components/Traffic'
import Weather from '../components/Weather';

import './Dashboard.module.css';
// import Weather from '../components/Weather'

const Dashboard = () => {
    return(
        <div>
            <h1>It-Högskolan</h1>
            <Clock />
            <Weather/>
            <Traffic />
        </div>

    )
}

export default Dashboard;