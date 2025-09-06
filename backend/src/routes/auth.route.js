import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";

const router = express.Router();

// routes are getting called from controller/auth.controller
router.get("/signup", signup);

router.get("/login", login);

router.get("/logout", logout);

export default router;