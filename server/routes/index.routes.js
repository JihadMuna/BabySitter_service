import { Router } from "express";
import userRoutes from "./users.router.js";
import babySitterRoutes from "./babysitters.router.js";
import parentsRoutes from "./parents.router.js";

const indexRoutes = Router();

indexRoutes.use("/users", userRoutes);
indexRoutes.use("/parents", parentsRoutes);
indexRoutes.use("/babySitters", babySitterRoutes);

export default indexRoutes;
