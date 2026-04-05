import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./utils/connectDB.js";
import cors from "cors";

const DB_URI = process.env.DB_URI;

if (!DB_URI) {
  console.log("DB_URI not found");
  process.exit(1);
}

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

app.get("/login", (req, res) => {
  res.json("Bla bla bla");
});

connectDB(DB_URI).then(() => {
  app.listen(2000, () => {
    console.log("Server: http://localhost:2000");
  });
});
