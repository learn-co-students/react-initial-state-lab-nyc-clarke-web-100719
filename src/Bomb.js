// your Bomb code here!
import React from 'react';


export default class Bomb extends React.Component{
    constructor(props){
        super();
        
        this.state =    {
            secondsLeft: props.initialCount
       }    
    }
    render(){
        return (this.state.secondsLeft===0 
            ? <h1>Boom!</h1> 
            : <h2>{this.state.secondsLeft} seconds left before I go boom!</h2>)
        // if (this.state.secondsLeft = 0){
        //     return(<h1>Boom!</h1>)
        // }
        // else {
        //     return (<h2>{this.state.secondsLeft} seconds left before I go boom!</h2>)

        // }
    }
}