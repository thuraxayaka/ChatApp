import mongoose from 'mongoose';

const connectToDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "ChatApp"
        });
        console.log("connected to db successfully");
    }catch(error) {
        console.log("Error connecting to mongodb in connect.js." + error.message);
    }
}

export default connectToDb;