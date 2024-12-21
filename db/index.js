import mongoose from "mongoose";
import { DB_NAME } from "../src/constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("ERRROR IN MONGODB", error);
    process.exit(1); //read about it
  }
};

export default connectDB;
