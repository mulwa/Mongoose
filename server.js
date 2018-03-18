var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;
// defining schema
var userSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        minlength:2
    },
    visible:Boolean
});
// creating model
var user = mongoose.model('User',userSchema);

var user1 = new user({
    name:"Kate Mulwa",
    age:20,
    visible:false,    
});
var user2 = new user({
    name:"Norman Nyanga",
    age:56,
    visible:false
});

var error = user2.validateSync();



const url = 'mongodb://localhost:27017/MeetApp';
mongoose.connect(url).then((res)=>{
    console.log('mongoose connected to mongo server');
    // user2.save().then((res)=>{
    //     console.log("saved succesfully");
    //     console.log(JSON.stringify(res));
    // },error =>{
    //     console.log('not saved ' +error);
    // });

    // quering
    user.find({name:'Kate Mulwa'}).then((doc)=>{
        console.log(JSON.stringify(doc,undefined,2));

    },e => console.log('not  found '+e));
    
},error =>{
    return console.log('moongoose failed to connect'+error);
});


