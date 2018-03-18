const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./database/mongoose');
var { user } = require('./Models/User');

var app = express();

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.post('/user',(req,res)=>{
    console.log(req.body);
});


module.exports = app;
