const mongoose = require('../Database/index.js')
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,

    password:{

        type:String,
        require:true,
        select:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,  
        
    },
    
});

UserSchema.pre('save',()=>{
    this.password
})

const User = mongoose.model('Users',UserSchema);

module.exports= User; 