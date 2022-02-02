import React, { useState } from "react";
import QuestionList from "./QuestionList";

function Home(props) {
    const [ currentTopic, setCurrentTopic ] = useState('History');

    return(
        <div>
            <nav>
                <ul>
                    <li><button>History</button></li>
                    <li><button>Geography</button></li>
                    <li><button>Flowers</button></li>
                </ul>
            </nav>

            <QuestionList currentTopic={currentTopic} />
        </div>
    );
}

export default Home;