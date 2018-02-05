import React from 'react';

import UserResult from './user-result.js'

export default function ResultList(props) {
    return (
         <div className="result-container">
            <div className="result-label">Your Guess Was:</div>
            {props.pastGuesses.map((item, index) => (<p key ={index}>{item}</p>))}
            <div className={props.feedback.class}> {props.feedback.text} </div>
        </div>
    );
}

