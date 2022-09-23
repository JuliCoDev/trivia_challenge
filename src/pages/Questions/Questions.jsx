import { useEffect, useState } from "react";
import { questions } from "../../services/questions"
import styles from "./css/question.module.css"
const Questions = () =>{
    const [listQuestion , setListQuestion ] = useState([]);
    const [numberQuestion , setNumberQuestion] = useState(0);


    useEffect(() =>{
        //Call the function with list questios
        questions.list 
        .then(data => setListQuestion(data))
        .catch(error => console.log(error));
    }, [])


    //Change the number of current question
    const handleQuestion = () =>{
        setNumberQuestion(numberQuestion => numberQuestion + 1);
    } 


    //Show all answers pissbile
    const showAnswers = (answers) =>{
        return(
            answers.sort().map((answer , index) =>{
                return (
                    <div key={index}>
                        <button  onClick={() => handleQuestion()}>{answer}</button>
                    </div>
                )
            })
        )        
    }

    //Id te questios are ready these show
    if(listQuestion.length > 0 && numberQuestion < listQuestion.length){
        const {category, question , correctAnswer, incorrectAnswers} = listQuestion[numberQuestion];
        const totalAnswers = [...incorrectAnswers , correctAnswer];
        return(           
            <div className={styles.cardQuestion}>
                <h1>{category}</h1>
                <p>{question}</p> 
                {showAnswers(totalAnswers)}
            </div>
        )
    }else if(listQuestion.length > 0 && numberQuestion >= listQuestion.length){
        return (
            <h1>SCORE</h1>
        )
    }
    

    return(
        <h1>CARGANDO...</h1>
    )
    
}

export default Questions
