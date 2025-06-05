import React from 'react';
import './Header.css';
import logo from '../../assets/images/logos/logoSmall.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
         <img 
  src={logo} 
  alt="Rakryan logo" 
  className="logo-img"
  style={{
    width: '40px', 
    height: '40px',
    objectFit: 'contain' 
  }}
/>
      </div>
      <nav className="nav-menu">
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">Skill Dev</a>
        <a className="nav-link" href="#">digTalent Hub</a>
        <a className="nav-link" href="event">Events</a>
        <a className="nav-link" href="payment">Course</a>
        <a className="nav-link" href="#">About</a>
      </nav>
      <div className="user-profile">
        <i className="fas fa-user-circle user-icon"></i>
        <span>Latifa</span>
      </div>
    </header>
  );
};

export default Header;