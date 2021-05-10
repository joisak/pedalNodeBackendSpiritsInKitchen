import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const ShowUsers = (props) => {
  const removeUser = (id) => {
    console.log(id);
    axios.delete('deleteUser/' + id).then((res) => {
      console.log('Success deleting user with id: ', id);
      props.parentCallBack();
    });
  };

  return (
    <div>
      USERS
      <table>
        <thead>
          <tr>
            <td>Namn</td>
            <td>E-mail</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {props.users
            ? props.users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td> {user.name} </td>
                    <td>{user.email}</td>
                    <td>
                      <Link to={'user/' + user.id}>Ändra användare</Link>
                    </td>
                    <td>
                      <button type='button' onClick={() => removeUser(user.id)}>
                        Radera användare
                      </button>
                    </td>
                  </tr>
                );
              })
            : 'Inga användare'}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUsers;
