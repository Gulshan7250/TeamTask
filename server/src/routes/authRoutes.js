import express from "express";
import { body } from "express-validator";
import {
  signup,
  login,
  findUserByEmail
} from "../controllers/authController.js";

import { validate } from "../middleware/validationMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// =======================
// SIGNUP
// =======================
router.post(
  "/signup",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 })
  ],
  validate,
  signup
);

// =======================
// LOGIN
// =======================
router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password").notEmpty()
  ],
  validate,
  login
);

// =======================
// 🔥 FIND USER BY EMAIL
// =======================
router.post("/find-user", protect, findUserByEmail);

export default router;