import React, { useState } from "react";
import QuizQuesion from "./objects/QuizQuestion";

function QuizQuestion(props) {

    const [ quizQuestion, setQuizQuestion ] = useState( { questionText: 'Hello world!' });
    
    React.useEffect( () => {
        let myQuestion = {};

        fetch('http://localhost:4000')
            .then(results => results.json())
            .then(data => {
    
                const fullQuiz = data.jillsquiz;
                const historyTopic = fullQuiz[0];
    
                const jsonQuestion = historyTopic.quizquestions[0];
                console.log(jsonQuestion);
    
                myQuestion = new QuizQuesion(jsonQuestion.question, jsonQuestion.answers, jsonQuestion.correct_answer);
                console.log(myQuestion);
                setQuizQuestion(myQuestion);
            });
    }, []);

    return(
        <div>
            <p className="question">{quizQuestion.questionText}</p>
            <ul>
                <li>{quizQuestion.answers[0]}</li>
                <li>{quizQuestion.answers[1]}</li>
                <li>{quizQuestion.answers[2]}</li>
            </ul>
            <p>Correct answer is: {quizQuestion.correctAnswer}</p>
        </div>
    );
}

export default QuizQuestion;