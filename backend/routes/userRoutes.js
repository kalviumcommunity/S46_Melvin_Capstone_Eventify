import express from "express";
import * as userController from "../controllers/userController.js";
import { limiter } from "../helpers/ratelimit.js";

const router = express.Router();
const {
  createUser,
  getUserProfile,
  deleteUser,
  registerForEvent,
  bookmarkEvent,
  updateUserProfile,
  getAllUsers
} = userController;

router.get("/", limiter, getAllUsers);
router.post("/register", limiter, createUser); 
router.get("/profile/:userId", limiter, getUserProfile); 
router.put('/profile/:userId', updateUserProfile);
router.delete("/profile/:userId", deleteUser); 
router.post("/:userId/events/:eventId/register", limiter, registerForEvent); 
router.post("/:userId/events/:eventId/bookmark", limiter, bookmarkEvent); 

export default router;
