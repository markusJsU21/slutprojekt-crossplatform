import Clock from '../components/Clock'
import Traffic from '../components/Traffic'
import Weather from '../components/Weather';

import './Dashboard.css';
// import Weather from '../components/Weather'

const Dashboard = () => {
    return(
        <div>
            <div className="component-container">
                <h1>It-Högskolan</h1>
               {navigator.OnLine === false &&
               <p>Your are offline and will not receive the latest information</p>
               }
                    <Clock className="clock" />
                    <Weather className="weather"/>
                    <Traffic className="traffic"/>
            </div>
        </div>

    )
}

export default Dashboard;