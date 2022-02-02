import React, { useState } from "react";
import QuizQuesion from "./objects/QuizQuestion";
import QuizQuestion from "./QuizQuestion";

function QuestionList(props) {

    const [ questions, setQuestions ] = useState( [{ questionText: 'Hello world!', answers: [ '1', '2', '3'] }, { questionText: 'Hello world!', answers: [ '1', '2', '3'] }] );

    React.useEffect( () => {
        let myQuestionList = [];
        if (props.currentTopic !== 'none') {
            fetch('http://localhost:4000')
            .then(results => results.json())
            .then(data => {
    
                const fullQuiz = data.jillsquiz;
                let topicNumber = -1;
    
                switch (props.currentTopic) {
                    case 'History':
                        topicNumber = 0;
                        break;
    
                    case 'Geography':
                        topicNumber = 1;
                        break;
                    
                    case 'Flowers':
                        topicNumber = 2;
                        break;
                
                    default:
                        break;
                }
    
                const chosenTopic = fullQuiz[topicNumber];
    
                const topicQuestions = chosenTopic.quizquestions;
    
                topicQuestions.map((data) => {
                     return myQuestionList.push(new QuizQuesion(data.question, data.answers, data.correct_answer));
                });
    
                setQuestions(myQuestionList);
            });    
        }
    }, [props.currentTopic]);

    if (props.currentTopic !== 'none') {
        return(
            <div>
                
                <b>Questions for {props.currentTopic}</b>
                <QuizQuestion myQuestion={questions[0]} questionNumber={1} />
                <QuizQuestion myQuestion={questions[1]} questionNumber={2} />
                <br />
                <button>Get your scores!</button>
            </div>
        );
    }
    else{
        return (
            <div>
                <p>Select a topic to start the quiz.</p>
            </div>
        )
    }



}

export default QuestionList;