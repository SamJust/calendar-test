const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/calendar').then(() => {
    console.log('Connected to Database');
}).catch((err) => {
    console.log('Something went wrong with DB connection');
    console.error(err);
});;

const app = express();
const jsonBodyParser = bodyParser.json({ extended: false });

app.use(jsonBodyParser);
app.use(cookieParser);

const API_PREFIX = '/api';

const auth = require('../modules/auth');
app.use(`${API_PREFIX}`, auth);

const userRouter = require('../routes/userRouter');

app.use(`${API_PREFIX}/user`, userRouter);

module.exports = app;