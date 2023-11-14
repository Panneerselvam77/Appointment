import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MongoURL = process.env.DB_CONNECTION;

export default function dbConnection() {
  try {
    mongoose.connect(MongoURL);
    console.log("MongoDb connected at 8070");
  } catch (error) {
    console.log("Error connecting DB---", error);
  }
}
