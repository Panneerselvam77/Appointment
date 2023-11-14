import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./db.js";
import { useRouter } from "./Router/userRouter.js";

// Configuring
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewers
app.use(express.json());
app.use(cors());
dbConnection();

// API setup
app.get("/", (req, res) => {
  res.send("Hey I working good");
});

app.use("/api/user", useRouter);

// App listening
app.listen(PORT, () => console.log(`Node server working at ${PORT}`));
