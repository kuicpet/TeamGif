const { Pool } = require('pg');


// database config
const pool = new Pool({
  user: 'wfwwgggf',
  host: 'raja.db.elephantsql.com',
  database: 'wfwwgggf',
  password: 'k0y-xR3mGGNoEgYU-hSlzpfXpQGY_0oU',
  post: 5432,
});

module.exports = pool;
/*
const conString = 'postgres://wfwwgggf:k0y-xR3mGGNoEgYU-hSlzpfXpQGY_0oU@raja.db.elephantsql.com:5432/wfwwgggf'; // Can be found in the Details page
const client = new pg.Client(conString);
// eslint-disable-next-line consistent-return
client.connect((err) => {
  if (err) {
    // eslint-disable-next-line no-console
    return console.error('could not connect to postgres', err);
  }
  // eslint-disable-next-line consistent-return
  // eslint-disable-next-line no-shadow
  // eslint-disable-next-line consistent-return
  client.query('SELECT NOW() AS "theTime"', (result) => {
    if (err) {
      // eslint-disable-next-line no-console
      return console.error('error running query', err);
    }
    // eslint-disable-next-line no-console
    //console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});


module.exports = pool; */
