const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/studentDB');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/', studentRoutes);

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
