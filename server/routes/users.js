import express from "express";
import { signin, signup } from "../controllers/users.js";

// create a router object from express
const router = express.Router();

// root site is http://localhost:5000/
// add HTTP method routes
router.post("/signin", signin);
router.post("/signup", signup);
export default router;
