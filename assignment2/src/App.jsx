
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import MyInfo from './pages/MyInfo';
import FacilityList from './pages/FacilityList';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;