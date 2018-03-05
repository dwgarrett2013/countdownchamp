import React from 'react';  //allows you to import all of react's capabilities
import ReactDOM from 'react-dom'; //controlls putting react code onto BrowserRouter
import App from './App'; //this import the app component from the file in the same directory

//spits out div text onto the screen.  We are referencing our JSX page
//We can also change a 2-tagged div element to a 1-tagged element using a self-enclosing tag [<App />]

//this imports the root element identified in the public folder index.hmtl page
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
