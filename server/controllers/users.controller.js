import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/users.model.js";
import STATUS_CODE from "../constants/statusCodes.js";

const generateToken = (userId, userRole) => {
  return jwt.sign({ userId, userRole }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(`Login attempt for email: ${email}`);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log(`User with email ${email} not found.`);
      return res
        .status(STATUS_CODE.UNAUTHORIZED)
        .json({ error: "Invalid credentials" });
    }

    console.log(`Retrieved hashed password: ${user.password}`);
    const comparePassword = await bcrypt.compare(password, user.password);
    if (user && comparePassword) {
      console.log(`User ${email} successfully logged in.`);

      const token = generateToken(user._id, user.role);
      res.status(STATUS_CODE.OK).json({ token });
    } else {
      res
        .status(STATUS_CODE.UNAUTHORIZED)
        .json({ error: "Login failed (email or password incorrect!" });
    }

    // After successful login, send the response
  } catch (error) {
    next(error);
  }
};

export const signupUser = async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body;
    if (!(username && email && password && role)) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({ error: "Please provide all fields" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({ error: "User already exists" });
    }
    const newUser = await User.create({
      username,
      email,
      password,
      role: role || "parent",
    });
    // const token = generateToken(user._id, user.role);
    res.status(STATUS_CODE.CREATED).json({ newUser });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(STATUS_CODE.OK).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const findUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json({ error: "User not found" });
    }
    res.status(STATUS_CODE.OK).json(user);
  } catch (error) {
    console.error("Error finding user by ID:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(STATUS_CODE.OK).send(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(STATUS_CODE.OK).send(deletedUser);
  } catch (error) {
    console.error("Error deleting user:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};
