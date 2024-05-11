import mongoose from "mongoose";
import "dotenv/config";
export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() =>
      console.log("DB connection successful : lets fetch some data now ")
    );
};
