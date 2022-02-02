import React, { useState } from "react";
import QuestionList from "./QuestionList";

function Home(props) {
    const [ currentTopic, setCurrentTopic ] = useState('none');

    return(
        <div>
            <nav>
                <ul>
                    <li><button onClick={() => setCurrentTopic('History')}>History</button></li>
                    <li><button onClick={() => setCurrentTopic('Geography')}>Geography</button></li>
                    <li><button onClick={() => setCurrentTopic('Flowers')}>Flowers</button></li>
                </ul>
            </nav>

            <QuestionList currentTopic={currentTopic} />
        </div>
    );
}

export default Home;