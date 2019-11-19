/* eslint-disable no-trailing-spaces */
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// express app
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

/* Create user account */
app.post('/auth/create-user', (req, res, next) => {
  if (!req.body.firstname) {
    return res.status(400).json({ status: 'error', error: 'first name is required' });
  }
  if (!req.body.lastname) {
    return res.status(400).json({ status: 'error', error: 'last name is required' });
  }
  if (!req.body.email) {
    return res.status(400).json({ status: 'error', error: 'email is required' });
  }
  if (!req.body.password) {
    return res.status(400).json({ status: 'error', error: 'password is required' });
  }
  if (!req.body.gender) {
    return res.status(400).json({ status: 'error', error: 'gender  is required' });
  }
  if (!req.body.jobRole) {
    return res.status(400).json({ status: 'error', error: 'job role  is required' });
  }
  if (!req.body.department) {
    return res.status(400).json({ status: 'error', error: 'department  is required' });
  }
  if (!req.body.address) {
    return res.status(400).json({ status: 'error', error: 'address  is required' });
  }
  // Database Stuff

  res.status(201).json({
    status: 'success',
    data: {
      message: 'User account successfully created',
      token: 'String',
      userId: 'Interger',
    },
  });
  next();
});
app.use((req, res) => {
  res.json({ message: 'Your gifs request was successful!' });
});

module.exports = app;
