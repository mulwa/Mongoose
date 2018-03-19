const express = require('express');
var router = express.Router();

var {userSchema}  = require('./../Models/User');
var {mongoose} = require('./../database/mongoose');

var User = mongoose.model('User',userSchema);
router.post('/',(req,res,next)=>{
        user = new User({
        name: req.body.name,        
        gender: req.body.gender,
        email: req.body.email
    });

    user.save().then((doc)=>{
        res.status(200).json({
            message:"saved successfully",
            data: JSON.stringify(doc,undefined,2)
        })
    },(e)=>{
        console.log('error occured'+e);
        res.status(400).send(e);
    });   
    

});


router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"hello from user get"
    });
});
router.get('/:name',(req,res,next)=>{
    let searchName = req.params.name;
    res.status(200).json({
        message:`search ${searchName} found`,
        name: searchName
    });
})
router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message:"hello from user delete"
    });
});

module.exports = router;