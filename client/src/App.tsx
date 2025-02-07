import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<div>Login Page (Coming Soon)</div>} />
        <Route path="/dashboard" element={<div>Dashboard (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
};

export default App;
