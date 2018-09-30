const express = require('express');
const app = express();
const data = require('./data');

const sunsets = [
  'https://static.rootsrated.com/image/upload/s--dOztdKo4--/t_rr_large_traditional/xeeqiz2egntxuc7u5mce.jpg',
  'http://en.es-static.us/upl/2016/06/sunset-beach-NW-England-Adrian-Strand-lg-e1480508948619.jpg',
  'https://static1.squarespace.com/static/51c2647ee4b097ff213b1a19/t/52599f0ce4b018d723814d2d/1381605140157/AutumnSunset3.jpg'
];

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

app.get('/sunsets', (req, res) => {
  res.status(200).json(sunsets);
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
