const pool = require('pg');
const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// database config
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
  client.query('SELECT NOW() AS "theTime"', (err, result) => {
    if (err) {
      // eslint-disable-next-line no-console
      return console.error('error running query', err);
    }
    // eslint-disable-next-line no-console
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});


module.exports = pool;
