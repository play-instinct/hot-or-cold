import React from 'react';



export default class UserForm extends React.Component {

    submit(e){
        e.preventDefault();
        const value = this.input.value;
        this.props.submitHandler(value);

    }

    render (){
        return (
            <form onSubmit={e => this.submit(e)}>
                <label htmlFor="guess">Your Guess:</label>&emsp;
                <input
                    ref={input => (this.input = input)}
                    type="text"
                    id="guess"
                    name="guess"
                />
                <div className="submit-container">
                    <button type ="submit">Guess</button>
                </div> 
            </form>
        );

    }

}






