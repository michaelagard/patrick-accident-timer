import React, { Component } from "react";
import './App.css';
class App extends Component {
  state = {
    counter: 0,
    timerOn: false
  }
  componentDidMount() {
    if (!localStorage.getItem("counter")) {
      localStorage.setItem("counter", JSON.stringify(this.state.counter));
    } else {
      this.setState({ counter: JSON.parse(localStorage.getItem("counter")) });
    }
  }
  
  
  timer = () => {
    this.timerInterval = setInterval(this.incrementTimer, 1000);
  }

  turnTimerOn = () => {
    this.startTimer();
  }

  turnTimerOff = () => {
    this.timer = null;
  }

  startTimer = () => {
    this.timer();
  }
  stopTimer = () => {
    clearInterval(this.timerInterval);
  }
  incrementTimer = () => {
    this.setState({counter: this.state.counter + 1});
    localStorage.setItem("counter", JSON.stringify(this.state.counter));
  }

  resetTimer = () => {
    this.stopTimer();
    this.setState({counter: 0});
    localStorage.setItem("counter", 0);
  }
  
  render() {
    return (
      <div>
        <h2>Patrick's Accident Timer</h2>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.turnTimerOn()}>
        Start Timer
        </button>
        
        <button onClick={() => this.resetTimer()}>
          Reset Timer
        </button>
        <button onClick={() => clearInterval(this.timerInterval)}>Stop Timer</button>
      </div>
    )
  }
}

export default App;
