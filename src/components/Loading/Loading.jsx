import loading from '../../assets/loading.gif'
import styles from './Loading.module.css'
const Loading = () => {
    return(
        <div className={styles.container}>
            <img src={loading} alt="loading"/>
        </div>        
    )
}

export default Loading;