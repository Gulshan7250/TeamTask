import express from "express";
import { protect } from "../middleware/authMiddleware.js";

import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

// ==========================
// 🚀 CREATE TASK (ADMIN ONLY - validated in controller)
// ==========================
router.post("/", protect, createTask);

// ==========================
// 📦 GET TASKS (ROLE BASED)
// ==========================
router.get("/", protect, getTasks);

// ==========================
// 🔄 UPDATE TASK
// - Member → update status only
// - Admin → full update (title, status, assign)
// ==========================
router.put("/:id", protect, updateTask);

// ==========================
// 🗑️ DELETE TASK (ADMIN ONLY)
// ==========================
router.delete("/:id", protect, deleteTask);

export default router;