import express from "express";
const router = express.Router();
import * as userController from "../controllers/userController.js";
const { getUserProfile } = userController;

router.get("/profile", getUserProfile);

export default router;
