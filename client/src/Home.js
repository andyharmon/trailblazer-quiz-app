import React, { useState } from "react";
import QuestionList from "./QuestionList";
import "./styles.css";

function Home(props) {
    const [ currentTopic, setCurrentTopic ] = useState('none');

    return(
        <div>
            <nav>
                <ul className="topics">
                    <li><button className="history" onClick={() => setCurrentTopic('History')}>History</button></li>
                    <li><button className="geography" onClick={() => setCurrentTopic('Geography')}>Geography</button></li>
                    <li><button className="flowers" onClick={() => setCurrentTopic('Flowers')}>Flowers</button></li>
                </ul>
            </nav>

            <QuestionList currentTopic={currentTopic} />
        </div>
    );
}

export default Home;