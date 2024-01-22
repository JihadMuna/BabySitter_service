import express from "express";
import {
  loginParent,
  signupParent,
  getAllParents,
  findParentById,
  updateParent,
  deleteParent,
} from "../controllers/parents.controller.js";
import { authenticateParent } from "../middlewares/auth.middleware.js";
import { authorizeRole } from "../middlewares/authorization.js";

const router = express.Router();

router.post("/login", loginParent);
router.post("/signup", signupParent);
router.get("/", authenticateParent, authorizeRole("admin"), getAllParents);
router.get("/:id", authenticateParent, findParentById); // Changed authenticateUser to authenticateParent
router.put("/:id", authenticateParent, authorizeRole("admin"), updateParent);
router.delete("/:id", authenticateParent, authorizeRole("admin"), deleteParent);

export default router;
