module.exports = (app) => {
  const users = require('../controllers/user.controller.js');
  // Create a new Customer
  app.post('/createUser', users.create);

  // Retrieve all users
  app.get('/users', users.findAll);

  // Retrieve a single Customer with customerId
  app.get('/users/:userId', users.findOne);

  app.put('/user/:userId', users.updateUser);

  app.delete('/deleteUser/:userId', users.deleteUser);
};
