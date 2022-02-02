import React, { useState } from "react";
import QuizQuesion from "./objects/QuizQuestion";
import QuizQuestion from "./QuizQuestion";

function QuestionList(props) {

    const [ questions, setQuestions ] = useState( [{ questionText: 'Hello world!', answers: [ '1', '2', '3'] }, { questionText: 'Hello world!', answers: [ '1', '2', '3'] }] );

    React.useEffect( () => {
        let myQuestionList = [];

        fetch('http://localhost:4000')
        .then(results => results.json())
        .then(data => {

            const fullQuiz = data.jillsquiz;
            const historyTopic = fullQuiz[0];

            const topicQuestions = historyTopic.quizquestions;

            topicQuestions.map((data) => {
                 return myQuestionList.push(new QuizQuesion(data.question, data.answers, data.correct_answer));
            });

            console.log(myQuestionList);
            setQuestions(myQuestionList);
        });
    }, []);

    return(
        <div>
            <b>Questions!</b>
            <QuizQuestion myQuestion={questions[0]} questionNumber={1} />
            <QuizQuestion myQuestion={questions[1]} questionNumber={2} />
            <br />
            <button>These are all of my answers</button>
        </div>
    );

}

export default QuestionList;