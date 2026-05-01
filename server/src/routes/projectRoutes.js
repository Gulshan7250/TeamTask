import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

import {
  createProject,
  addMember,
  getProjects,
  getAssignableMembers,
  deleteProject,
  updateProject // 🔥 ADD THIS
} from "../controllers/projectController.js";

const router = express.Router();

// ==========================
// 🚀 CREATE PROJECT (ADMIN)
// ==========================
router.post("/", protect, authorize("admin"), createProject);

// ==========================
// ✏️ UPDATE PROJECT (🔥 NEW)
// ==========================
router.put("/:id", protect, authorize("admin"), updateProject);

// ==========================
// ➕ ADD MEMBER (ADMIN)
// ==========================
router.post("/add-member", protect, authorize("admin"), addMember);

// ==========================
// 📦 GET PROJECTS (ALL USERS)
// ==========================
router.get("/", protect, getProjects);

// ==========================
// 👥 GET ASSIGNABLE MEMBERS
// ==========================
router.get(
  "/:projectId/members",
  protect,
  authorize("admin"),
  getAssignableMembers
);

// ==========================
// 🗑️ DELETE PROJECT
// ==========================
router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteProject
);

export default router;