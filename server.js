const express = require('express');
const bodyParser = require('body-parser');
const handlebars  = require('express-handlebars');
const app = express();

let bubbleSort = require('./bubbleSort');

const hbs = handlebars.create({
  extname: 'hbs',
  defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.static('./'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res)=>{
  res.render('index');
});

app.post('/', (req, res)=>{
  let stringArr = req.body.array.split(',');
  let numArray = [];

  stringArr.forEach((num)=> {
    if(typeof num === 'number'){
      numArray.push(parseInt(num));
    }else{
      res.send('error');
    }
  });

  res.render('index', {array : bubbleSort(numArray)});
});


module.exports = app;