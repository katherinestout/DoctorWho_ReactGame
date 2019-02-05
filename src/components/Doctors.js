import React, { Component } from 'react';
import DoctorList from './DoctorList.json';
import DoctorCard from './DoctorCard.js';
import './css/doctors.css';
import Wrapper from './Wrapper';



class Doctors extends Component {
    state = {
        DoctorList
    };

  //if clicked dr who, add the id to array
  handleClick = (id) => {
    //const clickedArray = [''];
    //clickedArray.push(id);

      console.log(id);
      //console.log(clickedArray);

      //addClick();
  };

    /*
    addClick = () => {
     
      const clickedArray = [''];
      clickedArray.push(id);
  
        console.log(id);
        console.log(clickedArray);
    };
 
    */
    
//console.log(this.state.DoctorList[1].name);
  render() {

  
    return (
      <div>
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
