import React from "react";

export default class Button extends React.Component{
    handleButtonClick = (event) => {
      console.log(
        event.target.name,
        event.timestamp,
        event.button
      )
    }
    render(){
      return (
        <button name="myButton" onClick={this.handleButtonClick}>Click me!</button>
      );
    }
    
  
  }
  
  export class ClickCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 0};
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick = (event) => {
        console.log(event)
      this.setState(state => ({
        count: state.count + 1,
      }));
    }
    render() {
      return (
        <div>
          <p>Click sul pulsante: {this.state.count} </p>
          <button onClick={this.handleClick}>
            Cliccami
          </button>
        </div>
      );
    }
  }