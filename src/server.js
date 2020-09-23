const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routes/user.routes');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(userRouter);

module.exports = app;