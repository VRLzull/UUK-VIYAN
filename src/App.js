import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventRegistration from './pages/EventRegistration/EventRegistration';
import PaymentPage from './pages/PaymentPage/PaymentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventRegistration />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;