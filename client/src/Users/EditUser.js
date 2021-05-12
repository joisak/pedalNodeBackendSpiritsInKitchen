import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EditUser = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    let url = window.location.pathname.split('/'),
      id = url.pop();
    axios.get('/users/' + id).then((res) => {
      setUser(res.data);
    });
  };

  const updateUser = () => {
    let id = window.location.pathname.split('/').pop();
    axios
      .put('/user/' + id, { email: email, name: name })
      .then((res) => console.log(res));
  };

  const getName = (name) => {
    setName(name);
  };
  const getEmail = (email) => {
    setEmail(email);
  };

  return (
    <div>
      {user && (
        <div>
          <input
            placeholder={user.name}
            onChange={(e) => getName(e.currentTarget.value)}
          />
          <input
            placeholder={user.email}
            onChange={(e) => getEmail(e.currentTarget.value)}
          />
          <button onClick={updateUser}>Ändra</button>
        </div>
      )}
    </div>
  );
};

export default EditUser;
