/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

const express = require('express');
const jwt = require('jsonwebtoken');
const upload = require('./multerConfig');

const router = express.Router();
const pool = require('./db');


// Format of Token
// Authorization Bearer <access_token>


// Verify Token
function verifyToken(req, res, next) {
  // Get Auth header value
  const bearerHeader = req.headers.authorization;

  // Check to see if bearer is undefined
  // eslint-disable-next-line valid-typeof
  if (typeof bearerHeader !== undefined) {
    // split at the space
    const bearer = bearerHeader.split('');

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

// CREATE USER ENPOINT
router.post('/auth/create-user/', (req, res, next) => {
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.password,
    req.body.gender,
    req.body.jobRole,
    req.body.department,
    req.body.address,
  ];
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

  pool.query(`INSERT INTO users (firstname,lastname,email,password,gender,jobRole,department,address)
                VALUES($1 ,$2 ,$3 ,$4 ,$5 ,$6 ,$7 ,$8 )`,
  // eslint-disable-next-line consistent-return
  values, (qErr, qRes) => {
    if (qErr) return next(qErr);
    res.json(qRes.rows);
  });
});
router.post('/auth/create-user/test', (req, res, next) => {
  res.status(400).send({ message: 'This is an error response' });
  next();
});
// SIGNIN ENDPOINT
router.post('/auth/signin', (req, res, next) => {
  // user
  const user = req.body;
  jwt.sign({ user }, 'secretKey', { expiresIn: '24h' }, (_err, token) => {
    // eslint-disable-next-line no-console
    console.log(token);
  });
  const values = [
    req.body.email,
    req.body.password,
  ];
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
  pool.query('INSERT INTO users (email,password) VALUES($1, $2)',
    // eslint-disable-next-line consistent-return
    values, (qErr, qRes) => {
      if (qErr) return next(qErr);
      res.json(qRes.rows);
    });
});
router.post('/auth/signin/test', (req, res) => {
  res.status(400).send({ message: 'This is an error response' });
});
// POST GIFS ENDPOINT
router.post('/gifs', upload.any(), (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(req.file);
  // eslint-disable-next-line prefer-destructuring
  const imageUrl = req.file;
  const values = [
    req.body.gifTitle,
    imageUrl,
  ];
  pool.query('INSERT INTO gifs(gifTitle,imageUrl)VALUES($1, $2)',
    values, (qErr, qRes) => {
      if (qErr) return next(qErr);
      res.json(qRes.rows);
    });
});
router.post('/gifs/test', (req, res) => {
  res.status(400).send({ message: 'This is an error response' });
});
// POST ARTICLES ENDPOINT
router.post('/articles', verifyToken, (req, res, next) => {
  const values = [
    req.body.articleTitle,
    req.body.article,
  ];
  jwt.verify(req.token, 'secretKey', (_err, _authData) => {
    if (!req.token || !req.body.articleTitle || !req.body.article) {
      return res.status(404).json({
        status: 'error',
        message: 'Article was not successfully posted',
      });
    }
    res.status(202).send({
      status: 'success',
      data: {
        message: 'Article successfully posted',
        articleId: 'Integer',
        createdOn: 'DateTime',
        title: `${req.body.articleTitle}`,
      },
    });
  });
  pool.query('INSERT INTO articles(articleTitle, article, date_created)VALUES($1, $2, NOW())',
    values, (qErr, qRes) => {
      if (qErr) return next(qErr);
      res.json(qRes.rows);
    });
});
router.post('/articles/test', (req, res) => {
  res.status(400).send({ message: 'This is an error response' });
});
// UPDATE ARTICLES ENDPOINT
router.patch('/articles/articleId', (req, res, next) => {
  const values = [
    req.body.title,
    req.body.article,
  ];
  jwt.verify(req.token, 'secretKey', (_err, _authData) => {
    if (!req.token || !req.body.articleTitle || !req.body.article) {
      return res.status(404).json({
        status: 'error',
        message: 'Article was not successfully updated',
      });
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
  pool.query('UPDATE articles SET articleTitle = $1,article = $2,date_created = NOW() WHERE articleId = $3',
    values, (qErr, qRes) => {
      if (qErr) return next(qErr);
      res.json(qRes.rows);
    });
});
router.patch('/articles/articleId/test', (req, res) => {
  res.status(400).send({ message: 'This is an error response' });
});
// DELETE ARTICLE ENDPOINT
router.delete('/articles/articleId', (req, res, next) => {
  const { articleId } = req.body;
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (!req.token) {
      return res.status(403).json({
        status: 'error',
        message: 'Article was not successfully deleted',
      });
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
  pool.query('DELETE FROM articles where articleId = $1', [articleId],
    (qErr, qRes) => {
      res.json(qRes.rows);
      // eslint-disable-next-line no-console
      console.log(qErr);
    });
});
router.delete('/articles/articleId/test', (req, res) => {
  res.status(400).send({ message: 'This is an error response' });
});
// DELETE GIF ENDPOINT
router.delete('/gifs/gifId', (req, res, next) => {
  const { gifId } = req.body;
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      return res.status(403).json({
        status: 'error',
        message: 'gif post was not successfully deleted',
      });
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
  pool.query('DELETE FROM gifs where gifId = $1', [gifId],
    (qErr, qRes) => {
      res.json(qRes.rows);
      // eslint-disable-next-line no-console
      console.log(qErr);
    });
});
router.delete('/gifs/gifId/test', (req, res) => {
  res.status(400).send({ message: 'This is an error response' });
});
// POST COMMENTS TO ARTICLES ENDPOINT
router.post('/articles/articleId/comment', (req, res, next) => {
  const values = req.body.comments;
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      return res.status(403).json({
        status: 'error',
        message: 'comment was not successfully created',
      });
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
  pool.query('INSERT INTO comments(comment, authorId, date_created),VALUES($1, $2, NOW())',
    values, (qErr, qRes) => {
      if (qErr) return next(qErr);
      res.json(qRes.rows);
    });
});
router.post('/articles/articleId/comment/test', (req, res) => {
  res.status(400).send({ message: 'This is an error response' });
});
// POST COMMENTS TO GIFS ENPOINT
router.post('/gifs/gifId/comment', (req, res, next) => {
  const values = req.body.comments;
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      return res.status(403).json({
        status: 'error',
        message: 'comment was not successfully created',
      });
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
  pool.query('INSERT INTO gifs(comment, authorId, date_created),VALUES($1, $2, NOW())',
    values, (qErr, qRes) => {
      if (qErr) return next(qErr);
      res.json(qRes.rows);
    });
});
router.post('/gifs/gifId/comment/test', (req, res) => {
  res.status(400).send({ message: 'This is an error response' });
});
// GET FEED ENDPOINT
router.get('/feed', (req, res, next) => {
  const values = req.body.feed;
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
  pool.query('SELECT * FROM gifs && articles', values, (qErr, qRes) => {
    if (qErr) return next(qErr);
    res.json(qRes.rows);
  });
});
router.get('/feed/test', (req, res) => {
  res.status(400).send({ message: 'This is an error response' });
});
// GET ARTICLE ENDPOINT
router.get('/articles/articleId', (req, res, next) => {
  const values = req.body.articleId;
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
  pool.query('SELECT * FROM articles', values, (qErr, qRes) => {
    if (qErr) return next(qErr);
    res.json(qRes.rows);
  });
});
router.get('/articles/articleId/test', (req, res) => {
  res.status(400).send({ message: 'This is an error response' });
});
// GET GIF ENDPOINT
router.get('/gifs/gifId', (req, res, next) => {
  const values = req.body.gifId;
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
  pool.query('SELECT * FROM gifs', values, (qErr, qRes) => {
    if (qErr) return next(qErr);
    res.json(qRes.rows);
  });
});
router.get('/gifs/gitId/test', (req, res) => {
  res.status(400).send({ message: 'This is an error response' });
});

router.get('/', (req, res) => res.status(200).send({
  status: 'success',
  message: 'Welcome express app running',
}));

module.exports = router;
