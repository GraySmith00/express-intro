const express = require('express');
const app = express();

app.use(express.static('public'));

const urlLogger = (req, res, next) => {
  console.log('Request URL:', req.url);
  next();
};

const timeLogger = (req, res, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/json', urlLogger, timeLogger, (req, res) => {
  res.status(200).json({ name: 'Gray' });
});

app.listen(3000, () => {
  console.log('Express intro running on PORT 3000');
});
