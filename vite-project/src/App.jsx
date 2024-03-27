import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherApp from "../src/weatherApp/WeatherApp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
      </Routes>
    </Router>
  );
};

export default App;
