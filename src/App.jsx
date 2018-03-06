import React, { Component } from 'react';  //no need to import ReactDOM since index already covers this
import Clock from './Clock';  //import the clock class
import Stopwatch from './Stopwatch'; //impor the stopwatch class
import './App.css'; //This allows us to import the App.css file from the same directory
import { Form, FormControl, Button } from 'react-bootstrap'; //this allows us to import react-bootstrap capabilities that were defined in the public index.html

//we are creating ESX classes in an object-oriented model
//We are extending React's component class
class App extends Component {
  //method from component that allows us to return any JSX we would like
  //common mistake is to forget to use the return() method.  You must return the component
  //reminders about divs, they are just dividers and add structure to a page
  //we want to place some of these divs together in the same section
  //jsx uses css class names within templates.  thge call them 'className'  We can assign them within the div tags for each segment
  //in css, if classes share same property, can separate them with commas
  //to add space between classes, just add margins
  //when adding state to add component, we need to add a constructor

  //props is a convention, even though one could call it anything
  //props is based on object oriented concepts

  //setstate method will update the state dynamically within code
  constructor(props) {
    super(props);
    //state is an Object, could be a string, object, or another Object
    this.state={
      //adding first state variable called 'deadline'
      deadline: 'December 25, 2020',
      //adding a second state variable to receive changed input
      newDeadline: '', //initially set as an empty string

      stopwatchHours: 0,
      stopwatchMinutes: 0,
      stopwatchSeconds: 0,
      currentTime: new Date(),

      newStopwatchHours: null,
      newStopwatchMinutes: null,
      newStopwatchSeconds: null


    }
  }

//method actually changes the state of the deadline using the temporary newDeadline variable
changeDeadline() {
  //you must never change or update state directly, must always be done via setState, not via {this.state.deadline}
  //console.log('state', this.state);
  //This actuually sets the deadline state to the state of the newdeadline
  //console.log('before', this.state);
  this.setState({deadline: this.state.newDeadline});
  //console.log('after', this.state);
}

//changes the state of the stopwatchCountdownClock
changeStopWatch() {
  //you must never change or update state directly, must always be done via setState, not via {this.state.deadline}
  //console.log('before', this.state.newStopWatchCountdownClock);
  this.setState({stopwatchHours: this.state.newStopwatchHours, stopwatchMinutes: this.state.newStopwatchMinutes, stopwatchSeconds: this.state.newStopwatchSeconds, currentTime: new Date()});
  //console.log('after', this.state);
}

  //{this.state.deadline} is a variable represented by the state value
  //adding a onClick listener to the button via an anonomous function. if we just used this.changeDeadline, loops in the application woudl be formed. This forces page reloads to only occur when the onclick is pressed
      //on a click the value changes accordingly
  //adding onChange variable with an event, initially just logging to console output in the browser conosle logs (via inspect element, focusing on the event and the target value, originally a json)
  //change the onChange to set state from console.log
  //add the Clock
  //props arguements in the constructors can be passed from parent application state to other componenets via the tags (e.g. the clock props argument)
  //we can add form inline totrue, don't need the "true" if already true
  //We will also add FormControl and Button tags from react-bootstrap
  //adding className ("Deadline-Input") allows us to control font-size of input field in our css file
  render() {
    console.log('appState', this.state);
    return (
      <div className="App">
        <div className="App-title">
          Coundown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline={true}>
          <FormControl
            className="Deadline-input"
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
        <div className="App-title">
          Stopwatch Countdown
        </div>
        <Stopwatch
          stopwatchHours={this.state.stopwatchHours}
          stopwatchMinutes={this.state.stopwatchMinutes}
          stopwatchSeconds={this.state.stopwatchSeconds}
          currentTime={this.state.currentTime}
        />
        <Form  inline={true}>
          <FormControl
            className="Stopwatch-input"
            placeholder='Hours'
            onChange={event => this.setState({newStopwatchHours: event.target.value})}
          />
          <FormControl
            className="Stopwatch-input"
            placeholder='Minutes'
            onChange={event => this.setState({newStopwatchMinutes: event.target.value})}
          />
          <FormControl
            className="Stopwatch-input"
            placeholder='Seconds'
            onChange={event => this.setState({newStopwatchSeconds: event.target.value})}
          />
          <Button onClick={() => this.changeStopWatch()}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

//this allows us to export this module which we can export to other classes
export default App;
