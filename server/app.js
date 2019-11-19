/* eslint-disable no-unused-vars */
/* eslint-disable valid-typeof */
/* eslint-disable no-console */
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
// eslint-disable-next-line consistent-return
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
  if (!req.body.email) {
    return res.status(400).json({ status: 'error', error: 'email is required' });
  }
  if (!req.body.password) {
    return res.status(400).json({ status: 'error', error: 'password is required' });
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
/* Create a gif */
app.post('/gifs', verifyToken, (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  jwt.verify(req.token, 'secretKey', (err, _authData) => {
    if (err) {
      return res.status(403).json({ status: 'error', message: 'GIF image was not successfully posted' });
    } 
    if (!req.body.image) {
      return res.status(400).json({ status: 'error', error: 'GIF image not posted' });
    }
    if (!req.body.title) {
      return res.status(400).json({ status: 'error', error: 'GIF image has no title' });
    }
    return res.status(202).send({
      status: 'success',
      data: {
        gifId: 'Integer',
        message: 'GIF image successfully posted',
        createdOn: 'DateTime',
        title: 'String',
        imageUrl: 'String',
      }, 
    });
  });
  next();
});
/* Create an article */
app.post('/articles', verifyToken, (req, res, next) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      return res.status(403).json({ status: 'error', message: 'Article was not successfully posted' });
    } 
    if (!req.body.title) {
      return res.status(400).json({ status: 'error', error: 'Article has no title' });
    }
    if (!req.body.article) {
      return res.status(400).json({ status: 'error', error: 'No article' });
    }
    return res.status(202).send({
      status: 'success',
      data: {
        message: 'Article successfully posted',
        articleId: 'Integer',
        createdOn: 'DateTime',
        title: 'String',
      },
    });
  });
  next();
});

/* Edit an article */
app.patch('/articles/articleId', (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  jwt.verify(req.token, 'secretKey', (err, _authData) => {
    if (err) {
      return res.status(403).json({ status: 'error', message: 'Article was not successfully updated' });
    } 
    if (!req.body.title) {
      return res.status(400).json({ status: 'error', error: 'Article has no title' });
    }
    if (!req.body.article) {
      return res.status(400).json({ status: 'error', error: 'No article' });
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

/* Employees can delete their articles */
app.delete('/articles/articleId', (req, res, next) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
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

/* Employees can comment on other colleagues' article post */
app.post('/articles/articleId/comment', (req, res, next) => {
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

app.use((req, res) => {
  res.json({ message: 'Your gifs request was successful!' });
});

module.exports = app;
