const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override')

const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db/index')
const bodyParser= require('body-parser')
const multer = require('multer');
const cors = require('cors');




// connect db
db.connect();
// db.connectionMySQL();


const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());



app.use(bodyParser.urlencoded({extended: false}))


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    // Nếu bạn muốn cho phép nhiều origin, bạn có thể sử dụng '*'
    // res.header('Access-Control-Allow-Origin', '*');
    next();
});




app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.use(express.urlencoded({
    extended: true
}))
// template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
helpers: {
        sum: (a, b) => a + b,
},

  }),
);
app.set('view engine', 'hbs');
console.log(__dirname);
app.set('views', path.join(__dirname, 'resource','views'));

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

