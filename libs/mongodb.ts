import mongoose from "mongoose";
export async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.mongodbUri as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error(error as string);
  }
}
