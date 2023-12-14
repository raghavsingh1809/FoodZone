import "./App.css";
import React from "react";
import Maincard from "./Components/Maincard";
import Navbar from "./Components/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; 

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/> 
        <Routes>
          <Route exact path="/" element={<Maincard type="name" />} />
          <Route exact path="/breakfast" element={<Maincard type="breakfast" />}/>
          <Route exact path="/lunch" element={<Maincard type="lunch" />} />
          <Route exact path="/dinner" element={<Maincard type="dinner" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
