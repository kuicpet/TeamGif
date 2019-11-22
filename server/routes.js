const express = require('express');

const router = express.Router();
const pool = require('./db');


router.post('/auth/create-user/posttodb', (req, res, next) => {
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
  pool.query(`INSERT INTO teamusers (firstname,lastname,email,password,gender,jobRole,department,address)
                VALUES($1 ,$2 ,$3 ,$4 ,$5 ,$6 ,$7 ,$8 , NOW() )`,
  // eslint-disable-next-line consistent-return
  values, (qErr, qRes) => {
    if (qErr) return next(qErr);
    res.json(qRes.rows);
  });
});



module.exports = router;
