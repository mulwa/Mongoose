const express = require('express');
var router = express.Router();

var {User}  = require('./../Models/User');
var {mongoose} = require('./../database/mongoose');

router.post('/',(req,res,next)=>{
    const user = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender
    }    
    res.status(200).json({
        message:"Hello from user post",
        data: user

    });

});

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"hello from user get"
    });
});
router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message:"hello from user delete"
    });
});

module.exports = router;