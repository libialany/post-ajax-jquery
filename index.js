const express = require('express');
var bodyParser = require('body-parser')
const morgan = require('morgan');
const path = require('path')
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set('views',path.join(__dirname,'views'));

app.set('port', process.env.PORT || 4000);
app.set('view engine','ejs');
app.use(morgan('dev'));
app.use(require('./routes/index'));
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))




app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
  });