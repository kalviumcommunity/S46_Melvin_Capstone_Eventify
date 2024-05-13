import express from "express";
import {
  createChat,
  findChat,
  userChats,
} from "../controllers/chatController.js"
import { chatSchema } from "../models/joiValidation.js";
const router = express.Router();

const validateChatSchema = (req, res, next) => {
  const { error } = chatSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

router.post("/", validateChatSchema, createChat);
router.get("/:userId", userChats);
router.get("/find/:firstId/:secondId", findChat);

export default router;
