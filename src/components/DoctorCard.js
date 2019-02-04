import React from 'react';
import './css/card.css';

const DoctorCard = props => (

    <div className = "card">
    <div className="img-container">
    <img alt="true" src={props.image}
    
    onClick={() => props.handleClick(props.id)}
   
    />
    </div>

    </div>
)

export default DoctorCard;