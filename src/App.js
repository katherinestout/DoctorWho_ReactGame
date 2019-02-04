import React, { Component } from 'react';
import './App.css';
import Doctors from './components/Doctors';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Doctor Who Memory Game</h1>
      <h2><i>How good is your memory?</i></h2>
      <p>Click on a Doctor! When the board shuffles, 
        click on a different doctor. 
        
        <br></br>Keep clicking different doctors
        to see how good your memory is. 
        <br></br>If you click on all the doctors,
        you win. If you click on one twice, you lose!
      </p>
<Doctors/>
      
      </div>
    );
  }
}

export default App;
