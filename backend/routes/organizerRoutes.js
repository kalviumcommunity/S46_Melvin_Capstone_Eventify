import express from "express";
const router = express.Router();
import * as organizerController from "../controllers/organizerController.js";
import { limiter } from "../helpers/ratelimit.js";

const {
  createOrganizer,
  getOrganizerProfile,
  deleteOrganizer,
  createEvent,
  getOrganizerEvents,
  deleteEvent,
  updateEvent,
  updateOrganizerProfile,
  getAllOrganizers
} = organizerController;

router.get("/", limiter, getAllOrganizers);
router.post("/register", limiter, createOrganizer);
router.delete("/profile/:organizerId", deleteOrganizer);
router.get("/profile/:organizerId", getOrganizerProfile);
router.put("/profile/:organizerId", updateOrganizerProfile);
router.post("/events/:organizerId", createEvent);
router.get("/events/:organizerId", getOrganizerEvents);
router.put("/events/:eventId/:organizerId", updateEvent);
router.delete("/events/:eventId/:organizerId", deleteEvent);

export default router;
