/* eslint-disable no-unused-vars */
/* eslint-disable valid-typeof */
/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const pg = require('pg');
const router = require('./routes');

// express app
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


/* Create user account */
// eslint-disable-next-line consistent-return
app.post('/auth/create-user', (req, res, next) => {
  // eslint-disable-next-line max-len
  if (!req.body.firstname || !req.body.lastname || !req.body.email 
    || !req.body.password || !req.body.gender || !req.body.job_role 
    || !req.body.department || !req.body.address) {
    return res.status(400).send({
      status: 'error',
      error: 'User account was not successfully created',
    });
  }
  res.status(201).send({
    status: 'success',
    data: {
      message: `${req.body.firstname} ${req.body.lastname} account successfully created`,
      token: 'String',
      userId: 'Integer',
    },  
  });
  next();
});
app.post('/auth/create-user/test', (req, res, next) => {
  res.status(400).send({ message: 'This is an error response' });
  next();
});
  
// Database Stuff
  
 
// Format of Token
// Authorization Bearer <access_token>


// Verify Token
function verifyToken(req, res, next) {
  // Get Auth header value
  const bearerHeader = req.headers.authorization;   
  
  // Check to see if bearer is undefined
  if (typeof bearerHeader !== undefined) {
    // split at the space    
    const bearer = bearerHeader.split(' ');
  
    // Get token from array
    const bearerToken = bearer[1];
  
    // Set the token
    req.token = bearerToken;
  
    // next middleware
  } else {
  // Forbidden
    res.status(403).send({ status: 'error' });
  }
  next();
}
// Get token on sign in

/* Login a user */
// eslint-disable-next-line consistent-return
app.post('/auth/signin', (req, res, next) => {
  // user
  const user = req.body;
  jwt.sign({ user }, 'secretKey', { expiresIn: '24h' }, (err, token) => {
    console.log(token);
  });
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({
      status: 'error',
      error: 'No email or password entered',
    });
  }
  res.status(202).send({
    status: 'success',
    data: {
      token: 'String',
      userId: 'Integer',
    },
  });
  next();
});
app.post('/auth/signin/test', (req, res, next) => {
  res.status(400).send({ message: 'This an error response' });
  next();
});
/* Create a gif */
app.post('/gifs', verifyToken, (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  jwt.verify(req.token, 'secretKey', (err, _authData) => {
    if (!req.token || !req.body.image || !req.body.title) {
      return res.status(400).json({ status: 'error', error: 'gif image was not successfully posted' });
    }
    return res.status(202).send({
      status: 'success',
      data: {
        gifId: 'Integer',
        message: 'GIF image successfully posted',
        createdOn: 'DateTime',
        title: `${req.body.title}`,
        imageUrl: 'String',
      }, 
    });
  });
  next();
});
app.post('/gifs/test', (req, res, next) => {
  res.status(400).send({ message: 'This an error response' });
  next();
});
/* Create an article */
app.post('/articles', verifyToken, (req, res, next) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (!req.token || !req.body.articleTitle || !req.body.article) {
      return res.status(404).json({ status: 'error', message: 'Article was not successfully posted' });
    }
    return res.status(202).send({
      status: 'success',
      data: {
        message: 'Article successfully posted',
        articleId: 'Integer',
        createdOn: 'DateTime',
        title: `${req.body.articleTitle}`,
      },
    });
  });
  next();
});
app.post('/articles/test', (req, res, next) => {
  res.status(404).send({ message: 'This an error response' });
});
/* Edit an article */
app.patch('/articles/articleId', (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  jwt.verify(req.token, 'secretKey', (err, _authData) => {
    if (!req.token || !req.body.articleTitle || !req.body.article) {
      return res.status(404).json({ status: 'error', message: 'Article was not successfully updated' });
    }
    return res.status(202).send({
      status: 'success',
      data: {
        message: 'Article successfully updated',
        title: 'String',
        article: 'String',
      },
    });
  });
  next();
});
app.patch('/articles/articleId/test', (req, res, next) => {
  res.status(500).send({ message: 'This an error response' });
});
/* Employees can delete their articles */
app.delete('/articles/articleId', (req, res, next) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (!req.token) {
      return res.status(403).json({ status: 'error', message: 'Article was not successfully deleted' });
    } 
    return res.status(202).send({
      status: 'success',
      data: {
        message: 'Article successfully deleted',
        title: 'String',
        article: 'String',
      },
    });
  });
  next();
});
app.delete('/articles/articleId/test', (req, res, next) => {
  res.status(500).send({ message: 'This an error response' });
});
/* Employees can delete their gifs */
app.delete('/gifs/gifId', (req, res, next) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {     
    if (err) {
      return res.status(403).json({ status: 'error', message: 'gif post was not successfully deleted' });
    } 
    return res.status(202).send({
      status: 'success',
      data: {
        message: 'gif post successfully deleted',
        title: 'String',
        article: 'String',
      },
    });
  });
  next();
});
app.delete('/gifs/gifId/test', (req, res, next) => {
  res.status(500).send({ message: 'This an error response' });
});
/* Employees can comment on other colleagues' article post */
app.post('/articles/articleId/comment', (req, res, next) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (!req.token) {
      return res.status(404).json({ status: 'error', message: 'comment was not successfully created' });
    } 
    if (!req.body.comment) {
      return res.status().json({ status: 'error', message: 'No comment' });
    }
    return res.status(201).send({
      status: 'success',
      data: {
        message: 'Comment successfully created',
        createdOn: 'DateTime',
        articleTitle: 'String',
        article: 'String',
        comment: 'String',
      },
    });
  });
  next();
});
app.post('/articles/articleId/comment/test', (req, res, next) => {
  res.status(500).send({ message: 'This an error response' });
});
/* Employees can comment on other colleagues' gif post */
app.post('/gifs/gifId/comment', (req, res, next) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      return res.status(403).json({ status: 'error', message: 'comment was not successfully created' });
    } 
    if (!req.body.comment) {
      return res.status().json({ status: 'error', message: 'No comment' });
    }
    return res.status(201).send({
      status: 'success',
      data: {
        message: 'comment successfully created',
        createdOn: 'DateTime',
        articleTitle: 'String',
        article: 'String',
        comment: 'String',
      },
    });
  });
  next();
});
app.post('/gifs/gifId/comment/test', (req, res, next) => {
  res.status(500).send({ message: 'This an error response' });
});
/* Employees can view all articles or gifs, showing the most recently posted articles
or gifs first */
app.get('/feed', (req, res, next) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      return res.status(403).json({ status: 'error', message: 'error' });
    } 
    return res.status(200).send({
      status: 'success',
      data: [
        {
          id: 'Integer',
          createdOn: 'DateTime',
          title: 'String',
          'article/url': 'String', // use url for gif post and article for articles
          authorId: 'Integer',
        }, 
        {
          id: 'Integer',
          createdOn: 'DateTime',
          title: 'String',
          'article/url': 'String', // use url for gif post and article for articles
          authorId: 'Integer',
        }, 
        {
          id: 'Integer',
          createdOn: 'DateTime',
          title: 'String',
          'article/url': 'String', // use url for gif post and article for articles
          authorId: 'Integer',
        },
      ],
    });
  });
  next();
});
app.get('/feed/test', (req, res, next) => {
  res.status(500).send({ message: 'This an error response' });
});
/* Employees can view a specific article. */
app.get('/articles/articleId', (req, res, next) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      return res.status(403).json({ status: 'error', message: 'error' });
    } 
    return res.status(200).send({
      status: 'success',
      data: {
        id: 'Integer',
        createdOn: 'DateTime',
        title: 'String',
        article: 'String',
        comments: [
          {
            commentId: 'Integer',
            comment: 'String',
            authorId: 'Integer',
          },
          {
            commentId: 'Integer',
            comment: 'String',
            authorId: 'Integer',
          },
        ],
      },
    });
  });
  next();
});
app.get('/articles/articleId/test', (req, res, next) => {
  res.status(500).send({ message: 'This an error response' });
});
/* Employees can view a specific gif post */
app.get('/gifs/gifId', (req, res, next) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      return res.status(403).json({ status: 'error', message: 'error' });
    } 
    return res.status(200).send({
      status: 'success',
      data: {
        id: 'Integer',
        createdOn: 'DateTime',
        title: 'String',
        url: 'String',
        comments: [
          {
            commentId: 'Integer',
            authorId: 'Integer',
            comment: 'String',
          },
          {
            commentId: 'Integer',
            useauthorIdrId: 'Integer',
            comment: 'String',
          },
        ],
      },
    });
  });
  next();
});
app.get('/gifs/gifId/test', (req, res, next) => {
  res.status(500).send({ message: 'This an error response' });
});

// eslint-disable-next-line consistent-return

exports.closeServer = () => {
  // eslint-disable-next-line no-undef
  server.close();
};
module.exports = app;
