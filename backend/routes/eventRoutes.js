import express from "express";
import * as eventController from "../controllers/eventController.js";

const { getAllEvents, getEventById } = eventController;

const router = express.Router();

router.get("/", getAllEvents);

router.get("/:id", getEventById);

export default router;
