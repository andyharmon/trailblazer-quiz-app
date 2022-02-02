import React from "react";

function QuizQuestion(props) {

    return(
        <div>
            <p>Question {props.questionNumber}: {props.myQuestion.questionText}</p>
            
            <input type='radio' id={props.questionNumber + 'answer1'} name={props.questionNumber + 'answer'}></input>
            <label htmlFor={props.questionNumber + 'answer1'}>{props.myQuestion.answers[0]}</label>

            <input type='radio' id={props.questionNumber + 'answer2'} name={props.questionNumber + 'answer'}></input>
            <label htmlFor={props.questionNumber + 'answer2'}>{props.myQuestion.answers[1]}</label>

            <input type='radio' id={props.questionNumber + 'answer3'}name={props.questionNumber + 'answer'}></input>
            <label htmlFor={props.questionNumber + 'answer3'}>{props.myQuestion.answers[2]}</label>
            <br />
        </div>
    );
}

export default QuizQuestion;