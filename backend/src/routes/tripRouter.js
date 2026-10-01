import express from "express";
import { createTripPlan } from "../controllers/tripControllers.js";

const tripRouter = express.Router();
tripRouter.route("/").post(createTripPlan)

export {tripRouter};