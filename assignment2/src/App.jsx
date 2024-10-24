//Sanghyun Jun
//Sanghyun.Jun.1@stonybrook.edu

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import MyInfo from './pages/MyInfo';
import FacilityList from './pages/FacilityList';
import FacilityReservation from './pages/FacilityReservation';
import MyReservation from './pages/MyReservation';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/my-info" element={<MyInfo />}/>
          <Route path="/facility-list" element={<FacilityList />}/>
          <Route path="/facility-reservation" element={<FacilityReservation />} />
          <Route path="/my-reservation" element={<MyReservation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;