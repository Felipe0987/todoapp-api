import express from "express";
const route = express.Router();


import controller from "../controllers/index.controller.js";
route.get('/', controller.index)

export default route;