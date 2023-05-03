import React, { useState } from 'react';
import axios from 'axios';
//import "./css/Login.css"

export default function Login({ onLogin, url }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const json = JSON.stringify({ email: email, password: password });
    axios
      .post(url + 'admin/login.php', json, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setEmail('');
        setPassword('');
        if (response.data.status === '200') {
          onLogin();
        } else {
          setErrorMessage('Email or password is incorrect.');
        }
      })
      .catch((error) => {
        setErrorMessage(
          error.response === undefined ? error : error.response.data.error
        );
      });
  }

  return (
    <div className='wrapper'>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className='grid'>
          <label>Email</label>
          <input
            className='login-input'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className='grid'>
          <label>Password</label>
          <input
            className='login-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit">Login</button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </div>
  );
}
