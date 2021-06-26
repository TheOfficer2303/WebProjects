const express = require('express');
const app = express();
var path = require('path');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session)
const db = require('./db')


const homeRouter = require('./routes/home.routes');
const newsRouter = require('./routes/news.routes');
const loginRouter = require('./routes/login.routes');
const logoutRouter = require('./routes/logout.routes');
const signupRouter = require('./routes/signup.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true}));

app.use(session({
    store: new pgSession({
        pool: db.pool
    }),
    secret: "something",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000
    }
})
)


app.use('/', homeRouter)
app.use('/addnews', newsRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter)
app.use('/signup', signupRouter);

app.listen(80);