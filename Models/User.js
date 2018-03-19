var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{
        type:String,
        required:true,       
        trim:true
    },
    email:{
        type:String,
        required:true,
        minlength:2
    },
    gender:{
        type:String,
        required:true
    }
});
// var user = mongoose.model('User',userSchema);
module.exports = {userSchema};