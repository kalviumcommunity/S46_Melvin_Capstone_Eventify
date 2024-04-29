import express from "express";
import * as userController from "../controllers/userController.js";
import rateLimit from "express-rate-limit";

const router = express.Router();
const {
  createUser,
  getUserProfile,
  deleteUser,
  registerForEvent,
  bookmarkEvent
} = userController;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later",
});

router.post("/register", createUser);
router.get("/profile", limiter, getUserProfile);
router.delete("/profile", deleteUser);
router.post("/events/:eventId/register", registerForEvent);
router.post("/events/:eventId/bookmark", bookmarkEvent);

export default router;
