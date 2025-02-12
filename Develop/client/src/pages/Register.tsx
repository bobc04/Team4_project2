import { useState } from 'react';
import { registerUser } from '../api/apiService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState({ name: '', phone: '', username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await registerUser(userData);
      navigate('/profile'); // Redirect to profile after successful registration
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={userData.phone} onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" value={userData.username} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
