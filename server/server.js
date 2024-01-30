import express from "express";
import chalk from "chalk";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import indexRoutes from "./routes/index.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

//env
dotenv.config();

const server = express();

server.use(cors());

server.use(express.json());

server.use("/api", indexRoutes);

server.use(errorHandler);

const PORT = process.env.PORT || 3000;

// mongoose url
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
  server.listen(PORT, () => {
    console.log(chalk.bgYellow.bold`server is listening on PORT: ${PORT}`);
  });
});
