import React, { Component } from 'react';
import DoctorList from './DoctorList.json';
import DoctorCard from './DoctorCard.js';
import './css/doctors.css';
import Wrapper from './Wrapper';

class Doctors extends Component {
    state = {
        DoctorList,
       // doctors,
        clickedArray: [],
        loss: 0,
        doctorCount: 0,
        msg: "Ready? Click to start!",
        score: 0
    };

  //handleClick: click event, if clicked dr who, add the id to array
  handleClick = (id) => {
    //if the array includes the id already, they add to lose
    if (this.state.clickedArray.includes(id)){

      this.setState({msg: "Sorry mate, you lost."});  

      let loss = this.state.loss +1;
      let doctorCount = this.state.doctorCount;

      doctorCount = 0;
      this.setState({doctorCount: doctorCount, 
        loss: loss, 
        clickedArray: []});
      this.shuffleDoctors();
    } 
    
    else {

      //else add to the doctorCount
      let doctorCount = this.state.doctorCount +1;
      let score = this.state.score +1;
    
     //if the doctorCount gets to 12, you win! 
      if (doctorCount === 12){
        this.setState({msg: "YOU WON!"});
        this.setState({doctorCount: 0, 
                      clickedArray: [],
                      score: score});
      }

    else {

    //make clickedArray equal to that in the state
    let clickedArray = this.state.clickedArray;
    //push the id into the array
    clickedArray.push(id); 

    console.log(clickedArray);

    this.setState({
      msg: this.doctorMsg(),
      doctorCount: doctorCount
    });

    this.shuffleDoctors();
    }
  }
  };

  shuffleDoctors = () => {
    const doctorCopy = this.state.DoctorList;
    let total = doctorCopy.length;
    const shuffled = [];
    while (total){
      let index = Math.floor(Math.random() * doctorCopy.length);
      if (index in doctorCopy){
        shuffled.push(doctorCopy[index]);
        delete doctorCopy[index];
        total --;
      }
    }
      this.setState({DoctorList: shuffled});
  };

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
        <h2>
          Score : {this.state.score}
          <br></br>
          Losses : {this.state.loss}

          <br></br>
         Doctor Count = {this.state.doctorCount}

        </h2>
        <br></br>
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
