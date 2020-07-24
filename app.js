//jshint esversion:6
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.render('home');
});

const authRoutes = require('./routes/authRoutes');

app.use(authRoutes);

mongoose
  .connect('mongodb://localhost:27017/userData', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('Database connected');
    app.listen(3000, () => {
      console.log('Server is now running');
    });
  })
  .catch((e) => console.log(e));
