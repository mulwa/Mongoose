const express = require('express');
var app = express();
const bodyParser = require('body-parser');

var userRouter = require('./Routes/UserRouter');


app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());


app.use('/user',userRouter);



module.exports = app;
