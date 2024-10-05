import express from "express";
const workRoute = express.Router();

import workController from "../controllers/works.controller.js";

workRoute.get('/works', workController.index )

export default workRoute;