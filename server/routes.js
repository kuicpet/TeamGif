/* eslint-disable consistent-return */
const express = require('express');

const router = express.Router();
const pool = require('./db');


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
  pool.query(`INSERT INTO users (firstname,lastname,email,password,gender,jobRole,department,address)
                VALUES($1 ,$2 ,$3 ,$4 ,$5 ,$6 ,$7 ,$8 )`,
  // eslint-disable-next-line consistent-return
  values, (qErr, qRes) => {
    if (qErr) return next(qErr);
    res.json(qRes.rows);
  });
});
router.post('/auth/signin', (req, res, next) => {
  const values = [
    req.body.email,
    req.body.password,
  ];
  pool.query('INSERT INTO users (email,password) VALUES($1, $2)',
    // eslint-disable-next-line consistent-return
    values, (qErr, qRes) => {
      if (qErr) return next(qErr);
      res.json(qRes.rows);
    });
});

router.post('/gifs', (req, res, next) => {
  const values = [
    req.body.image,
    req.body.title,
  ];
  pool.query('INSERT INTO gifs(gifTitle,imageUrl)VALUES($1, $2)',
    values, (qErr, qRes) => {
      if (qErr) return next(qErr);
      res.json(qRes.rows);
    });
});

router.post('/articles', (req, res, next) => {
  const values = [
    req.body.title,
    req.body.article,
  ];
  pool.query('INSERT INTO articles(articleTitle,article)VALUES($1, $2)',
    values, (qErr, qRes) => {
      if (qErr) return next(qErr);
      res.json(qRes.rows);
    });
});

router.patch('/articles/articleId', (req, res, next) => {
  const values = [
    req.body.title,
    req.body.article,
  ];
  pool.query('UPDATE articles SET articleTitle = $1,article = $2,date_created = NOW() WHERE articleId = $3',
    values, (qErr, qRes) => {
      if (qErr) return next(qErr);
      res.json(qRes.rows);
    });
});

router.delete('/articles/articleId', (req, res) => {
  const { articleId } = req.body;
  pool.query('DELETE FROM articles where articleId = $1', [articleId],
    (qErr, qRes) => {
      res.json(qRes.rows);
      // eslint-disable-next-line no-console
      console.log(qErr);
    });
});

router.delete('/gifs/gifId', (req, res) => {
  const { gifId } = req.body;
  pool.query('DELETE FROM gifs where gifId = $1', [gifId],
    (qErr, qRes) => {
      res.json(qRes.rows);
      // eslint-disable-next-line no-console
      console.log(qErr);
    });
});

router.post('/articles/articleId/commenttodb', (req, res, next) => {
  const values = req.body.comments;
  pool.query('INSERT INTO comments(comment, authorId, date_created),VALUES($1, $2, NOW())',
    values, (qErr, qRes) => {
      if (qErr) return next(qErr);
      res.json(qRes.rows);
    });
});

router.post('/gifs/gifId/commenttodb', (req, res, next) => {
  const values = req.body.comments;
  pool.query('INSERT INTO gifs(comment, authorId, date_created),VALUES($1, $2, NOW())',
    values, (qErr, qRes) => {
      if (qErr) return next(qErr);
      res.json(qRes.rows);
    });
});

router.get('/feed', (req, res, next) => {
  const values = req.body.feed;
  pool.query('SELECT * FROM gifs && articles', values, (qErr, qRes) => {
    if (qErr) return next(qErr);
    res.json(qRes.rows);
  });
});
router.get('/articles/articleId', (req, res, next) => {
  const values = req.body.articleId;
  pool.query('SELECT * FROM articles', values, (qErr, qRes) => {
    if (qErr) return next(qErr);
    res.json(qRes.rows);
  });
});
router.get('/gifs/gifId', (req, res, next) => {
  const values = req.body.gifId;
  pool.query('SELECT * FROM gifs', values, (qErr, qRes) => {
    if (qErr) return next(qErr);
    res.json(qRes.rows);
  });
});
router.get('/feed', (req, res, next) => {
  const values = req.body.feed;
  pool.query('SELECT * FROM gifs && articles',
    values, (qErr, qRes) => {
      if (qErr) return next(qErr);
      res.json(qRes.rows);
    });
});


module.exports = router;
