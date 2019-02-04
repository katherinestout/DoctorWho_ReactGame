import React, { Component } from 'react';
import DoctorList from './DoctorList.json';
import DoctorCard from './DoctorCard.js';
import './css/doctors.css';
import Wrapper from './Wrapper';



class Doctors extends Component {
    state = {
        DoctorList
    }

    handleClick = (id) => {
        //console.log(this.state);
        //console.log(this.props);
       // console.log(this);
        console.log(id);
       // console.log(this.props.object.name);
    };
    
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
