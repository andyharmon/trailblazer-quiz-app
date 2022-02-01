import React from "react";

function QuizJson() {
    const jsonContent = getJsonContent();

    React.

    return(
        <div>
            <p>{jsonContent}</p>
        </div>
    );
}

function getJsonContent() {
    let jsonString = '';

    fetch('http://localhost:4000')
        .then(results => results.json())
        .then(data => {
            jsonString = JSON.stringify(data.jillsquiz);
        });

    return jsonString;
}

export default QuizJson;