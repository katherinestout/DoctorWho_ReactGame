import React, { Component } from 'react';
import DoctorList from './DoctorList.json';
import DoctorCard from './DoctorCard.js';
import './css/doctors.css';
import Wrapper from './Wrapper';



class Doctors extends Component {
    state = {
        DoctorList,
      //  doctors,
        clickedArray: [],
        loss: 0,
        win: 0,
        msg: "",
        score: 0
    };

  //handleClick: click event, if clicked dr who, add the id to array
  handleClick = (id) => {
    //if the array includes the id already, they add to lose
    if (this.state.clickedArray.includes(id)){
      this.setState({msg: "Sorry mate, you lost."});  

      let lose = this.state.loss +1;
      let win = this.state.win;

      win = 0;
      this.setState({win: win, loss: lose, clickedArray: []});
      this.shuffleDoctors();
    } 
    
    else {
      let win = this.state.win +1;
      if (win === 12){
        this.setState({msg: "YOU WON!"});
        this.setState({win: 0, clickedArray: []});
        this.setState({score: +1});
      }
    
    
    else {
           //make clickedArray equal to that in the state
    let clickedArray = this.state.clickedArray;
    //push the id into the array
    clickedArray.push(id); 

    console.log(clickedArray);
    this.setState({
      msg: this.doctorMsg(),
     // clickedArray: clickedDoctor,
      win: win
    });
    this.shuffleDoctors();
    }
  }
  };

  shuffleDoctors = () => {

  }

  doctorMsg = () => {
    const msgArray = [
      "Great Job!",
      "Your memory is almost as good as mine, and I'm 2,000 years old!",
      "Not bad for a human...",
      "Allons y!",
      "My stars!",
      "Geronimo!"

    ];
    let random = Math.floor(Math.random() * msgArray.length);
    return `${msgArray[random]}`;
  };

  render() {

  
    return (
      <div>
        <h1>
          Score : 
          Losses : {this.state.lose}
          <br></br>
         Doctor Count = {this.state.win}
        </h1>
        <h2>{this.state.msg}</h2>
          <div className="wrapping">
          <Wrapper>
        {this.state.DoctorList.map(DoctorList => (

                <DoctorCard
                name key = {DoctorList.name}
                image = {DoctorList.image}
                id = {DoctorList.id}
                handleClick = {this.handleClick} 
                />

        ))}
        </Wrapper>
   </div>
      </div>
    )
  }
}

export default Doctors; 
