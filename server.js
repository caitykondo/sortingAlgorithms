const express = require('express');
const bodyParser = require('body-parser');

let bubbleSort = require('./bubbleSort');

const app = express();

app.use(express.static('./'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.post('/', (req, res)=>{

  console.log(req.body);
  let stringArr = req.body.array.split(',');
  console.log(stringArr);
  let numArray = [];
  stringArr.forEach((num)=> {
    numArray.push(parseInt(num));
  });
  console.log(numArray);
  res.send(bubbleSort(numArray));
});


module.exports = app;