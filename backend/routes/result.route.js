import express from "express";
import { CreateResult, ListResult } from "../controllers/result.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const ResultRouter = express.Router();

ResultRouter.post("/create", authMiddleware, CreateResult);
ResultRouter.get("/", authMiddleware, ListResult);

export default ResultRouter;
