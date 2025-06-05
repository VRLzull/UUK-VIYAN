import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './EventRegistration.css';
import Footer from '../../components/Footer/Footer';
import eventPoster from '../../assets/images/banners/classroom.jpg';

const EventRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    address: '',
    email: '',
    phone: '',
    occupation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', { state: { formData } });
  };

  return (
    <div className="event-registration-page">
      <Header />
      
      <main className="event-main">
        <section className="event-card">
          <div className="event-poster">
            <img src={eventPoster} alt="Event poster" className="poster-image" />
          </div>
          
          <div className="event-details">
            <div className="detail-section">
              <h2 className="event-title">Earn Money Easily With Digital</h2>
              <p className="detail-label">Speaker</p>
              <p className="detail-text">Ahmad Fatoni - Lead QA Engineer of DOT Indonesia</p>
              <p className="detail-text">Fahmi Idris - Frontend Engineer Kata.ai</p>
            </div>
            
            <div className="detail-section topics-section">
              <p className="detail-label">Topics</p>
              <ul className="topics-list">
                <li>Tips to keep productive for digiTalent</li>
                <li>Earn money at home</li>
                <li>Maximizing your digiTal Skills</li>
              </ul>
            </div>
            
            <div className="detail-section">
              <p className="detail-label">Date and Time</p>
              <p className="detail-text">Wednesday, 24th July 2020</p>
              <p className="detail-text">13:00 WIB</p>
              <p className="detail-label">Registration Fee</p>
              <p className="detail-text">Rp. 0</p>
            </div>
          </div>
          
          <div className="event-status">
            OPEN
          </div>
        </section>

        <section className="registration-section">
          <h3 className="section-title">Event Registration</h3>
          
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First Name :</label>
                <input 
                  id="firstName" 
                  name="firstName" 
                  type="text" 
                  className="form-input" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last Name :</label>
                <input 
                  id="lastName" 
                  name="lastName" 
                  type="text" 
                  className="form-input" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="birthDate" className="form-label">Birth Date :</label>
                <input 
                  id="birthDate" 
                  name="birthDate" 
                  type="date" 
                  className="form-input" 
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="gender" className="form-label">Gender :</label>
                <select
                  id="gender" 
                  name="gender" 
                  className="form-input" 
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="address" className="form-label">Address :</label>
              <input 
                id="address" 
                name="address" 
                type="text" 
                className="form-input" 
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email :</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                className="form-input" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number :</label>
              <input 
                id="phone" 
                name="phone" 
                type="tel" 
                className="form-input" 
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="occupation" className="form-label">Occupation :</label>
              <input 
                id="occupation" 
                name="occupation" 
                type="text" 
                className="form-input" 
                value={formData.occupation}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-submit">
              <button type="submit" className="submit-button">
                Register Now
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default EventRegistration;