const sql = require('./db.js');

//Constructior
const User = function (user) {
  this.name = user.name;
  this.email = user.email;
};

User.create = (newUser, result) => {
  sql.query('INSERT INTO users SET ?', newUser, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      result(err, null);
      return;
    }
    console.log('created User: ', { id: res.id, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.updateUser = (id, user, result) => {
  sql.query(
    'UPDATE users SET email = ?, name = ? WHERE id = ?',
    [user.email, user.name, id],
    (err, res) => {
      if (err) {
        console.log('Error', err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null);
        return;
      }

      console.log('Update user :)');
      result(null, res);
    }
  );
};

User.deleteUser = (userId, result) => {
  sql.query('DELETE FROM users WHERE id = ?', userId, (err, res) => {
    if (err) {
      console.log('Error', err);
      result(err, null);
      return;
    }
    if (res.affectedRows === 0) {
      result({ kind: 'not_found' }, null);
      return;
    }
    console.log('Success deleting user with id:', userId);
    result(null, res);
  });
};

User.findById = function (userId, result) {
  sql.query(`SELECT * FROM users WHERE id = ${userId}`, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log('found customer: ', res[0]);
      result(null, res[0]);
      return;
    }
    //Not found
    result({ kind: 'not_found' }, null);
  });
};

User.findAll = (result) => {
  sql.query('SELECT * FROM users', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('customers: ', res);
    result(null, res);
  });
};

module.exports = User;
