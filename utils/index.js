import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function generateToken(id) {
  jwt.sign({ id }, process.env.SECKRET_KEY);
}
