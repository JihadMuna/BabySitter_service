import STATUS_CODE from "../constants/statusCodes.js";

export const authorizeRole = (requiredRole) => {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (userRole !== requiredRole) {
      return res
        .status(STATUS_CODE.FORBIDDEN)
        .json({ error: "Forbidden - Insufficient privileges" });
    }

    next();
  };
};
