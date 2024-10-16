import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import mimo from '../../../../assets/icons/mimo.png'
import mimo2 from '../../../../assets/icons/mimo2.png'
import './signup.css';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password, username);
      const user = userCredential.user;
      console.log('User signed up:', user.uid);
      navigate('/'); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container-signup">
        <div className='block1'></div>
        <div className='block2'></div>
        <div className='block3'></div>
        <div className='block4'></div>
        <div className='mimo-png'><img src={mimo2} alt="" /></div>
    <div className="signup-card-container">
      <div className="signup-card">
      <div className="login-card-logo">
          <img src={mimo} alt="logo" />
        </div>
        <div className="signup-card-header">
          <h1>Start learning to code today!</h1>
        </div>
        <form className="signup-card-form" onSubmit={handleSignUp}>
          <div className="form-item">
            <span className="form-item-icon material-symbols-rounded"></span>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
            />
          </div>
          <div className="form-item">
            <span className="form-item-icon material-symbols-rounded"></span>
            <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e )=> setUsername(e.target.value)}
                autoFocus
                required
            />
          </div>
          <div className="form-item">
            <span className="form-item-icon material-symbols-rounded"></span>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <div className="signup-card-footer">
          Already have an account? <a href="/login">Sign in</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;