import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Local Community Business Revival Network!</h1>
      <p>Help locals, save money, find the service you need fast!.</p>
      <div className="auth-links">
        <Link to="/signup">Sign Up</Link> | <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default HomePage;
