const express = require('express');
const app = express();
const data = require('./data');

app.use(express.static('public'));

const urlLogger = (req, res, next) => {
  console.log('Request URL:', req.url);
  next();
};

const timeLogger = (req, res, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/json', (req, res) => {
  res.status(200).json(data);
});

const notFound = (req, res, next) => {
  res.status(404).send('Hmmm sorry could not find that page');
};
app.use(notFound);

app.listen(3000, () => {
  console.log('Express intro running on PORT 3000');
});
