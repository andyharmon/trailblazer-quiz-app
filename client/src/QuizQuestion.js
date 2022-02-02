import React, { useState } from "react";

function QuizQuestion(props) {

    const [selectedOption, setSelectedOption] = useState(-1);
    const [showAnswer, setShowAnswer] = useState(false);

    React.useEffect( () =>{
        if (selectedOption > -1) {
            setShowAnswer(true);
        }
    }, [selectedOption])

    if (showAnswer) {
        return(
            <div>
                <p>Question {props.questionNumber}: {props.myQuestion.questionText}</p>
                
                <input type='radio' id={props.questionNumber + 'answer1'} name={props.questionNumber + 'answer'} onClick={() => setSelectedOption(1)}></input>
                <label htmlFor={props.questionNumber + 'answer1'}>{props.myQuestion.answers[0]}</label>
    
                <input type='radio' id={props.questionNumber + 'answer2'} name={props.questionNumber + 'answer'} onClick={() => setSelectedOption(2)}></input>
                <label htmlFor={props.questionNumber + 'answer2'}>{props.myQuestion.answers[1]}</label>
    
                <input type='radio' id={props.questionNumber + 'answer3'}name={props.questionNumber + 'answer'} onClick={() => setSelectedOption(3)}></input>
                <label htmlFor={props.questionNumber + 'answer3'}>{props.myQuestion.answers[2]}</label>
                <br />
                
                {selectedOption === props.myQuestion.correctAnswer? <p>That's right</p> : <p>That's not right!</p>}
            </div>
        );
    } else {
        return(
            <div>
                <p>Question {props.questionNumber}: {props.myQuestion.questionText}</p>
                
                <input type='radio' id={props.questionNumber + 'answer1'} name={props.questionNumber + 'answer'} onClick={() => setSelectedOption(1)}></input>
                <label htmlFor={props.questionNumber + 'answer1'}>{props.myQuestion.answers[0]}</label>
    
                <input type='radio' id={props.questionNumber + 'answer2'} name={props.questionNumber + 'answer'} onClick={() => setSelectedOption(2)}></input>
                <label htmlFor={props.questionNumber + 'answer2'}>{props.myQuestion.answers[1]}</label>
    
                <input type='radio' id={props.questionNumber + 'answer3'}name={props.questionNumber + 'answer'} onClick={() => setSelectedOption(3)}></input>
                <label htmlFor={props.questionNumber + 'answer3'}>{props.myQuestion.answers[2]}</label>
                <br />
            </div>
        );
    }
}

export default QuizQuestion;