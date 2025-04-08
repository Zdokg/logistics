const mongoose = require("mongoose") ;

const Signup = new mongoose.Schema({
    email:{type:String , require:true} ,
    name:{type:String , require:true} ,
    company:{type:String , require:true} ,
    password:{type:String , require:true} ,
    phone:{type:Number , require:true} ,
    photo: {type: String, require:true},
    newPass: {type: String, require:true},
    role: {type:String, require:true, enum:["admin", "driver", "client", "secretary"], default:"admin"}
    
});

module.exports = mongoose.model("User", Signup);