import React, { useState } from "react";
import QuizQuesion from "./objects/QuizQuestion";

function QuizQuestion(props) {

    // const [ quizQuestion, setQuizQuestion ] = useState( { questionText: 'Hello world!', answers: [ '1', '2', '3'] });

    // React.useEffect( () => {
    //     let myQuestion = {};

    //     fetch('http://localhost:4000')
    //         .then(results => results.json())
    //         .then(data => {

    //             const fullQuiz = data.jillsquiz;
    //             const historyTopic = fullQuiz[0];
    //             const jsonQuestion = historyTopic.quizquestions[0];
    
    //             myQuestion = new QuizQuesion(jsonQuestion.question, jsonQuestion.answers, jsonQuestion.correct_answer);
    //             setQuizQuestion(myQuestion);
    //         });
    // }, []);

    return(
        <div>
            <p>{props.myQuestion.questionText}</p>
            
            <input type='radio' id="answer1" name="answer"></input>
            <label for='answer1'>{props.myQuestion.answers[0]}</label>

            <input type='radio' id="answer2" name="answer"></input>
            <label for='answer2'>{props.myQuestion.answers[1]}</label>

            <input type='radio' id="answer3" name="answer"></input>
            <label for='answer3'>{props.myQuestion.answers[2]}</label>
            <br />
        </div>
    );
}

export default QuizQuestion;