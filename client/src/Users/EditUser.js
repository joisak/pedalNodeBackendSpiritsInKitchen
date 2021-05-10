import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EditUser = () => {
  const [user, setUser] = useState([]);
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

  return (
    <div>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default EditUser;
