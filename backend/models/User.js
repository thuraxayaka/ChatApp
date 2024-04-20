import mongoose  from 'mongoose';

const userSchema = mongoose.Schema({
    "fullName" : {
        type: "String",
        required : [true,"Fullname is required"]
    },
    "username" : {
        type: "String",
        required: [true,"Username is required"]
    },
    "email" : {
        type: "String",
        required: [true,"Email is required"]
    },
    "password" : {
        type: "String",
        required: [true,"Password is required"]
    },
    "gender" : {
        type: "String",
        required: [true,"Gender is required"],
        enum : ["male","female"]
    },
    "profilePicture" : {
        type: "String",
        default: ""
    }
})

export default mongoose.model("User",userSchema);