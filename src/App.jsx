import React, { Component } from 'react';  //no need to import ReactDOM since index already covers this
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
  render() {
    return (
      <div className="App">
        <div className="App-title">Coundown to December 25, 2017</div>
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>

        <div>
          <input placeholder='new date'/>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}

//this allows us to export this module which we can export to other classes
export default App;
