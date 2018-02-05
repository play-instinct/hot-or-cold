import React from 'react';
import './board.css';
import UserForm from './user-form';
import ResultList from './result-list'

export default class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentGuess: null,
            pastGuesses: [],
            feedback: {},
            actualNumber: (Math.round(Math.random() * 100) + 1),

        }
    }

    setCurrentGuess(currentGuess){
        const pastGuesses = this.state.pastGuesses.slice();
        pastGuesses.push(currentGuess);
        const difference = Math.abs(currentGuess - this.state.actualNumber);       
        let feedback;
        if (difference >= 50) {
          feedback = { class: 'dark-blue', text: 'You\'re Ice Cold...'};
        } 
        else if (difference >= 30) {
          feedback = {class: 'medium-blue', text: 'You\'re Cold...'};
        } 
        else if (difference >= 10) {
          feedback =  {class: 'medium-red', text: 'You\'re Warm.'};
        } 
        else if (difference >= 1) {
          feedback = {class: 'dark-red', text: 'You\'re Hot!'};
        } 
        else {
          feedback = {class: 'gold', text: 'You got it!'};
        }
        this.setState({
            feedback,
            currentGuess,
            pastGuesses, 
        });
           
    }

    submitHandler(){
    }

    render() {

        console.log(this.state);
        return (
            <div className="board">
                <h2>Hot or Cold</h2>
                <UserForm submitHandler={this.setCurrentGuess.bind(this)}/>
                <ResultList pastGuesses = {this.state.pastGuesses} feedback={this.state.feedback} />
            </div>
        )
    }
}