// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    // decrement = () => {
    //     this.setState(setInterval(() => ({
    //         secondsLeft: newSecondsLeft - 1
    //     ), 1000)
    // };
    

    generateCountdown() {
        if (this.state.secondsLeft > 0) {
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        } else {
            return <h1>Boom!</h1>
        }
    }

    

    render() {
        return (
            <div>{this.generateCountdown()}</div>
        )
    }
}