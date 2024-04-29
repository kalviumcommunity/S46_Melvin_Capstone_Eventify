import express from "express";
import { findChat, userChats } from "../controllers/chatController.js";
const router = express.Router();

router.get("/:userId", userChats);
router.get("/find/:firstId/:secondId", findChat);

export default router;
