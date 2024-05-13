import express from "express";
const router = express.Router();
import * as organizerController from "../controllers/organizerController.js";
import { eventSchema, organizerSchema } from "../models/joiValidation.js";
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

const validateEventSchema = (req, res, next) => {
  const { error } = eventSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateOrganizerSchema = (req, res, next) => {
  const { error } = organizerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

router.get("/", limiter, getAllOrganizers);
router.post("/register", limiter, validateOrganizerSchema, createOrganizer);
router.delete("/profile/:organizerId", deleteOrganizer);
router.get("/profile/:organizerId", getOrganizerProfile);
router.put("/profile/:organizerId", validateOrganizerSchema, updateOrganizerProfile);
router.post("/events/:organizerId", validateEventSchema, createEvent);
router.get("/events/:organizerId", getOrganizerEvents);
router.put("/events/:eventId/:organizerId", validateEventSchema, updateEvent);
router.delete("/events/:eventId/:organizerId", deleteEvent);

export default router;
