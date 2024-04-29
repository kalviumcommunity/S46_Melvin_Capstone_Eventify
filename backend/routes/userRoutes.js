import express from "express";
import * as userController from "../controllers/userController.js";
import rateLimit from "express-rate-limit";

const router = express.Router();
const { getUserProfile } = userController;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later",
});

router.get("/profile", limiter, getUserProfile);

export default router;
