import "dotenv/config";
import mongoose from "mongoose";

export async function connectDB(uri) {
  try {
    await mongoose.connect(uri);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Error connecting with DB: ", error);
  }
}
