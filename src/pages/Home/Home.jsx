import styles from './css/home.module.css';

const Home = () =>{
    console.log(styles.container);
    return(
        <div className={styles.container}>
            <h1>Welcome to trivia challenge</h1>
            <p>Can you sore 100%?</p>
            <button>
                <a href='/questions'>Start!</a>
            </button>
        </div>        
    )
}

export default Home;