
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');

// express app
const app = express();


// middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/uploads', express.static('uploads'));
// cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/', router);

exports.closeServer = () => {
  // eslint-disable-next-line no-undef
  server.close();
};
module.exports = app;
