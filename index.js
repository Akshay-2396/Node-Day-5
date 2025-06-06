import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/db.Config.js";
import authRoute from "./Routers/user.router.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Backend 🖐");
});

app.use("/api/auth",authRoute)

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server Started and running");
});