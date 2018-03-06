import React, { Component } from 'react';
import './App.css';

//standard imports above

//we want to create a Stopwatch component to encompass the 3 div components in App.jsx
class Stopwatch extends Component {

  constructor(props) {
    super(props);
    console.log('props', props)
    this.state= {
      hours: 0,
      minutes: 0,
      seconds: 0,
      futureTime: '',
      currentTime: new Date()
    }
    //need to add code the adjust the currentTime
    console.log('currentTime',this.props.currentTime);
    console.log('currenttime plus a few', new Date(this.props.currentTime.getTime()+(1000*1)+(1000*60*1)+(1000*60*60*1)));

  }

  //loads data before rendering
  componentWillMount() {
    //this.getFutureTime(this.props.stopwatchHours,this.props.stopwatchMinutes,this.props.stopwatchSeconds);
    this.getTimeUntil(this.props.stopwatchHours,this.props.stopwatchMinutes,this.props.stopwatchSeconds);
  }

  componentDidMount() {
    //executes getTimeUntil() every second (1000 ms since ms is the unit)
    setInterval(() => this.getTimeUntil(this.props.stopwatchHours,this.props.stopwatchMinutes,this.props.stopwatchSeconds), 1000);
  }

  //function that adds a leading zero to a number to ensure it is displayed neatly
  leadingZero(num) {
    //turnary experession approach
    return num < 10 ? ('0' + num) : num;
  }

  getTimeUntil(stopwatchHours, stopwatchMinutes, stopwatchSeconds) {
    const futureTime=new Date(this.props.currentTime.getTime()+(1000*stopwatchSeconds)+(1000*60*stopwatchMinutes)+(1000*60*60*stopwatchHours));
    const time = Date.parse(futureTime) - Date.parse(new Date());
    console.log('time',time);

    //calculations for each of the number of seconds until deadline (negative if already passed)
    let seconds = Math.floor((time/1000) % 60);
    //console.log('seconds', seconds);
    let minutes = Math.floor((time/1000/60) % 60);
    let hours = Math.floor(time/(1000*60*60) % 24);

    if(hours<=0 && minutes<=0 && seconds<=0)
    {
      hours=0;
      minutes=0;
      seconds=0;
    }

    this.setState({hours, minutes, seconds});
  }

  //use this.state to hold the values of the state field
  render() {
    //console.log('stopwatch state', this.props);
    //this.whatever takes functions from the same class/component
    //one can add leadingZero() methods so that the displayed value is leading zeroes, for security reasons, this logic should be display-based, as opposed to actual implementable logic
    //if the deadline has already passed, then it will display a negative prior
    //console.log("hello" + this.state.secondsLeft);
    return (
      <div>
        <div className="Stopwatch-hours">{this.leadingZero(this.state.hours)} hours</div>
        <div className="Stopwatch-minutes">{this.leadingZero(this.state.minutes)} minutes</div>
        <div className="Stopwatch-seconds">{this.leadingZero(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default Stopwatch;
