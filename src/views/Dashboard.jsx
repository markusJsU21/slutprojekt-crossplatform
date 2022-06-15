import Clock from '../components/Clock'
import Traffic from '../components/Traffic'
import Weather from '../components/Weather';
import logo from '../assets/ITHS_logo.png'

import './Dashboard.css';
// import Weather from '../components/Weather'

const Dashboard = () => {
    return(
        <div>
            <div className="component-container">
                <img src={logo} alt="ITHS logo" className="ITHS-logo"/>
               {navigator.onLine === false &&
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