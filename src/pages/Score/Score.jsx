import { useEffect, useState } from "react";

const style =  (isCorrect) =>{
    return({
        backgroundColor : (isCorrect) ? '#0bad0061' : '#ff5050d9',
        marginBottom : '10px',                      
        borderRadius : '10px',
        paddingLeft :'10px'
    })
}

const Score = (props) =>{
    
    const [feedback , setFeedback] = useState([]);
    const [numberCorrectAnswers , setNumberCorrectAnswers] = useState(0);
    const {infoQuestions , answersUser} = props;


    useEffect(() => { 
        createFeedback();
    },[])



    const createFeedback  = () =>{
        //Take the info abut answers correct in the question and
        //the answers give by teh user

        //Add new array showing the correctas and incorrescts answers
        let count =0;
        const answersCorrectIncorrect = answersUser.map((item,index) =>{
            let answerFeedback = [];
            const {question , id , correctAnswer} = infoQuestions[index];
            if(item === correctAnswer){
                answerFeedback = {
                    id,
                    question,
                    answer: item,
                    isCorrect : true
                } 
                count++;
                return answerFeedback 
            } 

            answerFeedback = {
                id, 
                question,
                answer: item, 
                correctAnswer,
                isCorrect : false
            } 
            return answerFeedback 
                    
        })
        setNumberCorrectAnswers(count)
        setFeedback(answersCorrectIncorrect)
    }



    return(
        <div>
            {feedback.map(item => {
                const {question, id, answer, correctAnswer, isCorrect} = item;
                
                return(
                    <div 
                        key={id}
                        style={style(isCorrect)}      
                    >
                        <h3>{question}</h3>
                        <p>{answer}</p>
                        <p>{correctAnswer}</p>
                    </div>
                )
            })
            
            }
             <h1>SCORE{` ${numberCorrectAnswers} / ${infoQuestions.length} `}</h1>
        </div>
        
    )
}

export default Score;