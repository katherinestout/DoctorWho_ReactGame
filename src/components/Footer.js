import React, { Component } from 'react';
//import './css/footer.css';

class Footer extends Component {
  render() {
    return (
        <footer className="fixed-bottom footer">
        <div className="container footer-copywright">
        <a href="https://www.github.com/katherinestout/DoctorWho_ReactGame"
         style={{ textDecoration: 'none', color: 'whitesmoke'}}> 
         <i className="fab fa-github"></i>
         
        
         &#169; Katherine Stout
          </a>
        
        </div>
        </footer>
    )
  }
}
export default Footer;
