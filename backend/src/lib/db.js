import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongo Connected: ${connection.connection.host}`);
    } catch (error) {
        console.log("Error Connecting to Mongo DB:", error);
        process.exit(1); // 1 means faliure 
    }
}