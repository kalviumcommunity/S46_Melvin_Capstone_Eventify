import express from "express";
import * as userController from "../controllers/userController.js";
import { limiter } from "./ratelimit.js";

const router = express.Router();
const {
  createUser,
  getUserProfile,
  deleteUser,
  registerForEvent,
  bookmarkEvent,
  updateUserProfile
} = userController;

router.post("/register", limiter, createUser);
router.get("/profile", limiter, getUserProfile);
router.put('/profile', updateUserProfile);
router.delete("/profile", deleteUser);
router.post("/events/:eventId/register", limiter, registerForEvent);
router.post("/events/:eventId/bookmark", bookmarkEvent);

export default router;
