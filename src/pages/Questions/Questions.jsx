import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { questions } from "../../services/questions"
import Score from "../Score/Score";
import styles from "./css/question.module.css"
import Title from "../../components/Title";
const Questions = () =>{
    const [listQuestion , setListQuestion ] = useState([]);
    const [numberQuestion , setNumberQuestion] = useState(0);
    const [answersUser, setAnswersUser] = useState([]);


    useEffect(() =>{
        //Call the function with list questios
        questions.list 
        .then(data => setListQuestion(data))
        .catch(error => console.log(error));
    }, [])


    //Change the number of current question
    const handleQuestion = (target) =>{
        setAnswersUser(answersUser=> [...answersUser , target.value])
        setNumberQuestion(numberQuestion => numberQuestion + 1);
    } 


    //Show all answers pissbile
    const showAnswers = (answers) =>{
        return(
            answers.sort().map((answer , index) =>{
                return (
                    <div key={index}>
                        <button value={answer} onClick={(e) => handleQuestion(e.target)}>{answer}</button>
                    </div>
                )
            })
        )        
    }


    //Id te questios are ready these show
    if(listQuestion.length > 0 && numberQuestion < listQuestion.length){
        const {category, question , correctAnswer, incorrectAnswers} = listQuestion[numberQuestion];
        //Create new array to show all options answers
        const totalAnswers = [...incorrectAnswers , correctAnswer];
        return(           
            <div className={styles.cardQuestion}>
                <Title title={category} style="title-blue"/>
                <div className={styles.question}>
                    <p>{question}</p> 
                </div>
                {showAnswers(totalAnswers)}
            </div>
        )
    }else if(listQuestion.length > 0 && numberQuestion >= listQuestion.length){
        return (
            <Score infoQuestions={listQuestion} answersUser={answersUser}/>
        )
    }
    

    return(
        <Loading/>
    )
    
}

export default Questions
