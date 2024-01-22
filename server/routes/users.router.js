import express from "express";
import {
  loginUser,
  signupUser,
  getAllUsers,
  findUserById,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { authorizeRole } from "../middlewares/authorization.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.get("/", authenticateUser, authorizeRole("admin"), getAllUsers);
router.get("/:id", authenticateUser, findUserById);
router.put("/:id", authenticateUser, authorizeRole("admin"), updateUser);
router.delete("/:id", authenticateUser, authorizeRole("admin"), deleteUser);

export default router;
