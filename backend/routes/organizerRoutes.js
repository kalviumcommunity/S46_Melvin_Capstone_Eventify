import express from "express";
const router = express.Router();
import * as organizerController from "../controllers/organizerController.js";
const {
  createOrganizer,
  getOrganizerProfile,
  deleteOrganizer,
  createEvent,
  getOrganizerEvents,
  deleteEvent,
} = organizerController;

router.post("/register", createOrganizer);
router.delete("/profile", deleteOrganizer);
router.get("/profile", getOrganizerProfile);
router.post("/events", createEvent);
router.get("/events", getOrganizerEvents);
router.delete("/events/:eventId", deleteEvent);

export default router;
