import express from "express";
const router = express.Router();
import * as organizerController from "../controllers/organizerController.js";
import { limiter } from "./ratelimit.js";
const {
  createOrganizer,
  getOrganizerProfile,
  deleteOrganizer,
  createEvent,
  getOrganizerEvents,
  deleteEvent,
  updateEvent,
  updateOrganizerProfile,
} = organizerController;

router.post("/register", limiter, createOrganizer);
router.delete("/profile", deleteOrganizer);
router.get("/profile", getOrganizerProfile);
router.put("/profile", updateOrganizerProfile);
router.post("/events", createEvent);
router.get("/events", getOrganizerEvents);
router.put("/events/:eventId", updateEvent);
router.delete("/events/:eventId", deleteEvent);

export default router;
