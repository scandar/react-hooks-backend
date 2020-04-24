require('dotenv').config();
const express = require('express');
const data = require('./data');

const app = express();
const { PORT } = process.env;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/api', (req, res) => res.send(data.api));
app.get('/api/people', (req, res) => res.send(data.people));
app.get('/api/people/:id', (req, res) =>
  res.send(data.people.results[req.params.id - 1])
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
