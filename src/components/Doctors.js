import React, { Component } from 'react';
import DoctorList from './DoctorList.json';
import DoctorCard from './DoctorCard.js';
import './css/doctors.css';



class Doctors extends Component {
    state = {
        DoctorList
    }

  render() {


    return (
      <div>
          <div className="wrapping">
        {this.state.DoctorList.map(DoctorList => (
            <div> 

                <DoctorCard
                name key = {DoctorList.name}
                image = {DoctorList.image}
                />
            </div>
        ))}
   </div>
      </div>
    )
  }
}

export default Doctors; 
