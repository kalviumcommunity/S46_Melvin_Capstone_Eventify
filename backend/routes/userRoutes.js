import express from "express";
import * as userController from "../controllers/userController.js";
import { limiter } from "../helpers/ratelimit.js";
import { userSchema, loginSchema } from "../models/joiValidation.js";

const router = express.Router();
const {
  createUser,
  getUserProfile,
  deleteUser,
  registerForEvent,
  bookmarkEvent,
  updateUserProfile,
  getAllUsers,
  loginUser,
} = userController;

const validateUserSchema = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateLoginSchema = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

router.get("/", limiter, getAllUsers);
router.post("/register", limiter, validateUserSchema, createUser);
router.post("/login", limiter, validateLoginSchema, loginUser);
router.get("/profile/:userId", limiter, getUserProfile);
router.put("/profile/:userId", updateUserProfile);
router.delete("/profile/:userId", deleteUser);
router.post("/:userId/events/:eventId/register", limiter, registerForEvent);
router.post("/:userId/events/:eventId/bookmark", limiter, bookmarkEvent);

export default router;
