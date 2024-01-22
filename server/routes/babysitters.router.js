import express from "express";
import {
  loginBabySitter,
  signupBabySitter,
  getAllBabySitters,
  findBabySitterById,
  updateBabySitter,
  deleteBabySitter,
} from "../controllers/babysitters.controller.js";
import { authenticateBabySitter } from "../middlewares/auth.middleware.js";
import { authorizeRole } from "../middlewares/authorization.js";

const router = express.Router();

router.post("/login", loginBabySitter);
router.post("/signup", signupBabySitter);
router.get(
  "/",
  // authenticateBabySitter,
  // authorizeRole("admin"),
  getAllBabySitters
);
router.get("/:id", authenticateBabySitter, findBabySitterById);
router.put(
  "/:id",
  authenticateBabySitter,
  authorizeRole("admin"),
  updateBabySitter
);
router.delete(
  "/:id",
  authenticateBabySitter,
  authorizeRole("admin"),
  deleteBabySitter
);

export default router;
