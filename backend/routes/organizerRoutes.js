import express from "express";
const router = express.Router();
import * as organizerController from "../controllers/organizerController.js";
const { getOrganizerProfile, getOrganizerEvents } = organizerController;

// Get organizer details
router.get("/profile", getOrganizerProfile);

router.get("/events", getOrganizerEvents);

export default router;
