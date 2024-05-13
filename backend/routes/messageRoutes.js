import express from "express";
import { addMessage, getMessages } from "../controllers/messageController.js";
import { messageSchema } from "../models/joiValidation.js";

const router = express.Router();
const validateMessageSchema = (req, res, next) => {
    const { error } = messageSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
  
router.post("/", validateMessageSchema, addMessage);
router.get("/:chatId", getMessages);

export default router;
