import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');

  const changeNameHandler = (name) => {
    setuserName(name);
  };

  const changePasswordHandler = (password) => {
    setpassword(password);
  };

  const logIn = () => {
    console.log('Username', userName);
    console.log('Password', password);
    axios.post('login', { name: userName, email: password }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <p>
        <label>Login</label>
      </p>
      <form>
        <input
          placeholder='username'
          type='text'
          onChange={(e) => changeNameHandler(e.target.value)}
        />
        <input
          placeholder='password'
          type='password'
          onChange={(e) => changePasswordHandler(e.target.value)}
        />
        <button type='button' onClick={logIn}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
