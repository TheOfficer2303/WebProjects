const express = require('express');
const app = express();
var path = require('path');

const homeRouter = require('./routes/home.routes');
const newsRouter = require('./routes/news.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true}));

app.use('/', homeRouter)
app.use('/addnews', newsRouter);

app.listen(80);