import React, { Component } from 'react';
import DoctorList from './DoctorList.json';
import DoctorCard from './DoctorCard.js';
import './css/doctors.css';



class Doctors extends Component {
    state = {
        DoctorList
    }

    handleClick= () => {
        console.log(this);
    }
    
//console.log(this.state.DoctorList[1].name);

  render() {

 

    return (
      <div>
          <div className="wrapping">
        {this.state.DoctorList.map(DoctorList => (

            <div className="eachdoctor" 
            onClick = {this.handleClick} 
            key={DoctorList.name}> 

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
