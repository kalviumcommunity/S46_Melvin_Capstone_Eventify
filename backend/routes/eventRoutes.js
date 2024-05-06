import express from "express";
import * as eventController from "../controllers/eventController.js";

const { createEvent, getAllEvents, getEventById, deleteEvent, updateEvent } =
  eventController;

const router = express.Router();

router.post("/", createEvent);
router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.put('/:id', updateEvent);
router.delete("/:id", deleteEvent);

export default router;
