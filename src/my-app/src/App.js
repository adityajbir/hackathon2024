import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grades from "./Pages/Grades";
import Home from './Pages/Home';
import Tutoring from "./Pages/Tutoring";
import CalendarPage from './Pages/CalendarPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={Home} />
          <Route index element={<Home />} />
          <Route path="Grades" element={<Grades />} />
          <Route path="CalendarPage" element={<CalendarPage />} />
          <Route path="Tutoring" element={<Tutoring />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;