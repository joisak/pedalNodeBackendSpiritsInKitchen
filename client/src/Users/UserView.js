import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CreateUser from './CreateUser';
import ShowUsers from './ShowUsers';

const UserView = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get('users', {}).then((res) => {
      setUsers(res.data);
    });
  };

  const handleCallBack = () => {
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <CreateUser parentCallBack={handleCallBack} />
      <ShowUsers users={users} parentCallBack={handleCallBack} />
    </div>
  );
};

export default UserView;
