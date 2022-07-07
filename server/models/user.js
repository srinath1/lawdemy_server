const { Schemas } = require('aws-sdk')
const mongoose=require('mongoose')
const{Schema}=mongoose
const{ObjectId}=Schema
const userSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:64
    },
    picture:{
        type:String,
        default:'/avatar.png'
    },
    courses:[{type:ObjectId,ref:'Course'}],

    role:{
        type:[String],
        default:['Subscriber'],
        enum:['Subscriber','Instructor','Admin']
    },
    stripe_account_id:'',
    stripe_seller:{},
    stripeSession:{},
    passwordResetCode:{
        data:String,
        default:""

    }

},

{
    timeStamps:true
})
module.exports=mongoose.model('User',userSchema)