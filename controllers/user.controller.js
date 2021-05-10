const User = require('../models/user.model.js');

// Create and Save a new User
exports.create = (req, res) => {
  //Validate if there is some data
  if (!req.body) {
    res.status(400).send({
      message: 'Content cant be empty!',
    });
  }
  // Create user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
  });
  // Save user in db
  User.create(user, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occured while create user',
      });
    } else {
      res.send(data);
    }
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  User.findAll((err, data) => {
    if (err) {
      res.status(500)({
        message: err.message || 'Error while finding users',
      });
    } else {
      res.send(data);
    }
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(400).send({
          message: `Not found user with ${req.params.userId}`,
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving User with id ' + req.params.userId,
        });
      }
    } else res.send(data);
  });
};

exports.deleteUser = (req, res) => {
  User.deleteUser(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(400).send({
          message: `400 no user with ${req.params.userId}`,
        });
      } else {
        res.status(500).send({
          message: `Error, not finding user with ${req.params.userId}}`,
        });
      }
    } else {
      res.status(200).send({
        messsage: `Success deleting user with id: ${req.params.userId}`,
      });
    }
  });
};
