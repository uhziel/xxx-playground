const express = require('express');
const db = require('./database');

const app = express();
const port = 11577;

app.get('/pulse', (req, res) => {
  const token = req.query.token;
  const clientname = req.query.clientname;
  const clientip = req.query.clientip;
  const result = `recv /pulse token:${token} clientname:${clientname} clientip:${clientip}`;
  const sql = `INSERT INTO user_activity (token, clientname, clientip) VALUES ('${token}', '${clientname}', '${clientip}')`;
  db.run(sql, err => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
  console.log(sql);
  res.send(result);
});

app.get('/', (req, res) => {
  const sql = `
    SELECT clientip, count(1) as heatValue
    FROM user_activity
    GROUP BY clientip
    ORDER BY heatValue DESC;
  `;
  db.all(sql, (err, rows) => {
    if (err) {
      console.error(err);
      throw err;
    }

    const content = JSON.stringify(rows, null, 2);
    res.send(`<pre>${content}</pre>`);
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`)
});
