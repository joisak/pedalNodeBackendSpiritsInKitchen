import axios from 'axios';
import React, { useState } from 'react';

const CreateUser = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const getInputName = (name) => {
    setName(name);
  };

  const getEmailFromInput = (email) => {
    setEmail(email);
  };

  const createUser = () => {
    axios.post('createUser', { name: name, email: email }).then((res) => {
      console.log(res);
      props.parentCallBack();
    });
  };

  return (
    <div>
      <h2>Skapa kontakt</h2>

      <label htmlFor='name'>Namn</label>
      <input
        type='text'
        id='name'
        onChange={(e) => getInputName(e.currentTarget.value)}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='text'
        id='email'
        onChange={(e) => {
          getEmailFromInput(e.currentTarget.value);
        }}
      />
      <button onClick={createUser}>Skapa kontakt</button>
    </div>
  );
};
export default CreateUser;
