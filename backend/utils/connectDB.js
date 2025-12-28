import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is connected!");
  } catch (err) {
    console.log("MongoDB connection error!", err);
  }
};

export default connectDB;