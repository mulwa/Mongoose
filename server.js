var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;
var userSchema = new Schema({
    name:String,
    age:Number,
    visible:Boolean
});

var User = mongoose.model('User',userSchema);

var user1 = new User({
    name:"Christopher Mulwa",
    age:56,
    visible:true,    
})

const url = 'mongodb://localhost:27017/MeetApp';
mongoose.connect(url).then((res)=>{
    console.log('mongoose connected to mongo server');
    user1.save().then((res)=>{
        console.log("saved succesfully");
        console.log(JSON.stringify(res));
    },error =>{
        console.log('not saved'+error);
    })
    
},error =>{
    return console.log('moongoose failed to connect'+error);
});


