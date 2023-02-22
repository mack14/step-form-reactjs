import React from 'react';
import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { HomePage } from './pages/home';
import DashboardPage from './pages/dashboard';

function App() {
  return (
    <Container fluid className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
