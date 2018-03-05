import React, { Component } from 'react';
import './App.css';

//standard imports above

//we want to create a Clock component to encompass the 4 div components in App.jsx
class Clock extends Component {

  constructor(props) {
    super(props);
    this.state= {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  //loads data before rendering
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  //runs after the component completely renders to the applciation (e.g. we want the application to update regularly)
  //in our case we want to update every second after the component mounts
  componentDidMount() {
    //executes getTimeUntil() every second (1000 ms since ms is the unit)
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  //function that adds a leading zero to a number to ensure it is displayed neatly
  leadingZero(num) {
    //console.log(num);

    //conventional logic approach
    /*
    if(num<10) {
      return ('0'+ num);
    }
    return num;
    */

    //turnary experession approach
    return num < 10 ? ('0' + num) : num;
  }

  //es6 and later does not allow for you to use the var keyword
  //you must use 'let' (variables that need updating) or 'const' (variables that do not need updating)
  getTimeUntil(deadline) {
    //we are only calculating time once so it will not changed
    //Date is a javascript class that we can access
    const time = Date.parse(deadline) - Date.parse(new Date());
    //console.log takes a the header that we attach to the log output and the value as arguments
    //console.log('time',time);
    //Math.floor() returns largest internger less than or equal to a given number (takes the number divided without breaking up remainder)
    //Take the modulo of the number to get the remainder

    //calculations for each of the number of seconds until deadline (negative if already passed)
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    //log the output if desired
    //console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);

    //setState cannot be called outside the return portion of the render() method, need to solve with lifeycle method, must be called in the componentWillMount() method so that it will be loaded before the data is rendered to the screen (updated before rendering).  If this is done in render, an infinite loop will be created
    //this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});

    //the below expression is the same as above in ES6 because they are the same keyword and keyvalue name
    this.setState({days, hours, minutes, seconds});
  }

  //use this.state to hold the values of the state field
  render() {
    //this.whatever takes functions from the same class/component
    //one can add leadingZero() methods so that the displayed value is leading zeroes, for security reasons, this logic should be display-based, as opposed to actual implementable logic
    //if the deadline has already passed, then it will display a negative prior
    return (
      <div>
        <div className="Clock-days">{this.leadingZero(this.state.days)} days</div>
        <div className="Clock-hours">{this.leadingZero(this.state.hours)} hours</div>
        <div className="Clock-minutes">{this.leadingZero(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leadingZero(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default Clock;
