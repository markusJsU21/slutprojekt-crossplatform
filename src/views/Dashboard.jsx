import Clock from '../components/Clock'
import Traffic from '../components/Traffic'
import Weather from '../components/Weather';
import logo from '../assets/ITHS_logo.png'

import styles from './Dashboard.module.css';
// import Weather from '../components/Weather'

const Dashboard = () => {
    return(
        <div>
                <img src={logo} alt="ITHS logo" className={styles.ithsLogo}/>
               {navigator.onLine === false &&
               <p>Your are offline and will not receive the latest information</p>
               }
            <div className={styles.componentContainer}>
                    <Clock className={styles.clock} />
                    <Weather className={styles.weather}/>
                    <Traffic className={styles.traffic}/>
            </div>
        </div>

    )
}

export default Dashboard;