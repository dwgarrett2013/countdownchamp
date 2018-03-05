import React, { Component } from 'react';  //no need to import ReactDOM since index already covers this
import Clock from './Clock';  //import the clock class
import './App.css'; //This allows us to import the App.css file from the same directory

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
      deadline: 'December 25, 2017',
      //adding a second state variable to receive changed input
      newDeadline: '' //initially set as an empty string
    }
  }

//method actually changes the state of the deadline using the temporary newDeadline variable
changeDeadline() {
  //you must never change or update state directly, must always be done via setState, not via {this.state.deadline}
  //console.log('state', this.state);
  //This actuually sets the deadline state to the state of the newdeadline
  this.setState({deadline: this.state.newDeadline});
}

  //{this.state.deadline} is a variable represented by the state value
  //adding a onClick listener to the button via an anonomous function. if we just used this.changeDeadline, loops in the application woudl be formed. This forces page reloads to only occur when the onclick is pressed
      //on a click the value changes accordingly
  //adding onChange variable with an event, initially just logging to console output in the browser conosle logs (via inspect element, focusing on the event and the target value, originally a json)
  //change the onChange to set state from console.log
  //add the Clock
  render() {
    return (
      <div className="App">
        <div className="App-title">
          Coundown to {this.state.deadline}
        </div>
        <Clock />
        <div>
          <input placeholder='new date'
          onChange={event => this.setState({newDeadline: event.target.value})}
        />
          <button onClick={() => this.changeDeadline()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

//this allows us to export this module which we can export to other classes
export default App;
