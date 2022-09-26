import styles from './css/home.module.css';
import tiviaLogo from '../../assets/trivia_logo.png';
const Home = () =>{
    console.log(styles.container);
    return(
        <div className={styles.container}>
            <h1>Welcome to trivia challenge</h1>
            <img src={tiviaLogo}/>
            <button>
                <a href='/questions'>Start!</a>
            </button>
        </div>        
    )
}

export default Home;