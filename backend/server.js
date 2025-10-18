import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import UserRouter from "./routes/user.route.js";
import ResultRouter from "./routes/result.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB
connectDB();

// ROUTES
app.use("/api/auth", UserRouter);
app.use("/api/results", ResultRouter);

app.get("/", (req, res) => {
  res.send("API is Working");
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
