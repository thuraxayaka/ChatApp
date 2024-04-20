import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    receiverId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    senderId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message : {
        type: String,
        required: [true,"Message is required"]
    }
},
    {
        timestamps: true
    }
)

export default mongoose.model("Message",messageSchema);