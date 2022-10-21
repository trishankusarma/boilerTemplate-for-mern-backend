const mongoose = require('mongoose')
const bcrypt   = require('bcryptjs')

const { Schema , model } = mongoose

const jwt = require('jsonwebtoken')

const userSchema = Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    dailyStepCount:[{
        
         date :{
            type : Date
         },
         steps: {
            type : Number
         }
    }]
})

// methods and statics

userSchema.methods.generateAuthToken = async function(next){
   
    const user = this

    const token = await jwt.sign(
       { _id: user._id.toString() },
   
       process.env.USER_TOKEN_SECRET
    )

    return token
}

userSchema.statics.findByCredentials = async (email, password) => {

    const user = await User.findOne({ email });
    
    if (!user) {
      return null;
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return null;
    }
    return user;
}

userSchema.pre('save', async function (next) {

    const user = this;
    
    if (user.isModified('password')) {
    
        user.password = await bcrypt.hash(user.password, 10);
    }
    
    next();
});

module.exports = User = model('User',userSchema)