import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logos/logoSmal2.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-wrapper">
                    <img src={logo} alt="Rakryan logo" className="logo-img" />

          </div>
          <p className="logo-slogan">Providing, Connecting, Complementing</p>
        </div>

        <div className="footer-section">
          <h5>Sitemap</h5>
          <ul>
            <li><a href="#skill-dev">Skill Dev</a></li>
            <li><a href="#digitalent-hub">digiTalent Hub</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#course">Course</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#signin">Sign In</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Address</h5>
          <address>
            Jl. Bend. Palasari No.Kav 5, Karangbesuki,Kec. Sukun,Kota Malang,Jawa Timur 65149
          </address>
        </div>

        <div className="footer-section">
          <h5>Contact</h5>
          <ul>
            <li><i className="fas fa-phone-alt"></i> +6282257741226</li>
            <li><span className="fas fa-phone-alt"></span>+6281223292947</li>
            <li><i className="fas fa-envelope"></i>rakryan@gmail.com</li>
          </ul>
          <div className="footer-social">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          </div>
        </div>

        <div className="footer-section">
          <h5>Operational Hours</h5>
          <p>Monday - Friday 09:00 - 19:00</p>
        </div>
      </div>

      <div className="copyright">
        © 2020 Rakryan Digital Talent Hub. All right reserved
      </div>
    </footer>
  );
};

export default Footer;