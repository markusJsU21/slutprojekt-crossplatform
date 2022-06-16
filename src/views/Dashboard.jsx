import Clock from '../components/Clock'
import Traffic from '../components/Traffic'
import Weather from '../components/Weather';
import logo from '../assets/ITHS_logo.png'
import {useState} from 'react'

import styles from './Dashboard.module.css';
// import Weather from '../components/Weather'

const Dashboard = () => {
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine)
    function handleConnectionChange(event){
        if(event.type === "offline"){
            setOnlineStatus(!onlineStatus)
            console.log("You lost connection.");
        }
        if(event.type === "online"){
            setOnlineStatus(!onlineStatus)
            console.log("You are now back online.");
        }

        console.log(new Date(event.timeStamp));
    }
    window.addEventListener('online', handleConnectionChange);
    window.addEventListener('offline', handleConnectionChange);

    return(
        <div>
                <img src={logo} alt="ITHS logo" className={styles.ithsLogo}/>
               {onlineStatus === false &&
               <p>Your are offline and will not receive the latest information</p>
               }
            <div className="component-container">
                    <Clock />
                    <Weather />
                    <Traffic />
            </div>
        </div>

    )
}

export default Dashboard;