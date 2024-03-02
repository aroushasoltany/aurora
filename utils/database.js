import mongoose from "mongoose";
require('dotenv').config()

let isConnected = false; // track connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "aurora",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;

        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}
