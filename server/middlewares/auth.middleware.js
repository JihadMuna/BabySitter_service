import jwt from "jsonwebtoken";
import STATUS_CODE from "../constants/statusCodes.js";

export const authenticateUser = (req, res, next) => {
  try {
    const authHeader = req.headers.Authorization;
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(STATUS_CODE.UNAUTHORIZED)
        .json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded :", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(STATUS_CODE.UNAUTHORIZED).json({ error: "Unauthorized" });
  }
};
export const authenticateParent = (req, res, next) => {
  try {
    const authHeader = req.headers.Authorization;
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(STATUS_CODE.UNAUTHORIZED)
        .json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(STATUS_CODE.UNAUTHORIZED).json({ error: "Unauthorized" });
  }
};
export const authenticateBabySitter = (req, res, next) => {
  try {
    const authHeader = req.headers.Authorization || req.headers.authorization;
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(STATUS_CODE.UNAUTHORIZED)
        .json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(STATUS_CODE.UNAUTHORIZED).json({ error: "Unauthorized" });
  }
};
