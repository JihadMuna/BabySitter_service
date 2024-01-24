import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Parent from "../models/parents.model.js";
import STATUS_CODE from "../constants/statusCodes.js";

const generateToken = (parentId, parentRole) => {
  return jwt.sign({ parentId, parentRole }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const loginParent = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(`Login attempt for email: ${email}`);

  try {
    const parent = await Parent.findOne({ email });

    if (!parent) {
      console.log(`Parent with email ${email} not found.`);
      return res
        .status(STATUS_CODE.UNAUTHORIZED)
        .json({ error: "Invalid credentials" });
    }

    console.log(`Retrieved hashed password: ${parent.password}`);
    const comparePassword = await bcrypt.compare(password, parent.password);
    if (parent && comparePassword) {
      console.log(`Parent ${email} successfully logged in.`);

      const token = generateToken(parent._id, parent.role);
      res.status(STATUS_CODE.OK).json({ token });
    } else {
      res
        .status(STATUS_CODE.UNAUTHORIZED)
        .json({ error: "Login failed (email or password incorrect)!" });
    }

    // After successful login, send the response
  } catch (error) {
    next(error);
  }
};

export const signupParent = async (req, res, next) => {
  try {
    const {
      username,
      email,
      password,
      role,
      address,
      phoneNumber,
      numberOfKids,
      description,
    } = req.body;
    if (
      !(
        username &&
        email &&
        password &&
        phoneNumber &&
        address &&
        numberOfKids &&
        description
      )
    ) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({ error: "Please provide all fields" });
    }

    const parent = await Parent.findOne({ email });
    console.log(parent);
    if (parent) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({ error: "Parent already exists" });
    }
    const newParent = await Parent.create({
      username,
      email,
      password,
      phoneNumber,
      address,
      numberOfKids,
      description,
      role: role || "parent",
    });
    // const parentId = await parent?._id;
    // console.log(parentId);
    // console.log(parent._id);
    // const token = generateToken(parentId, parent.role);
    res.status(STATUS_CODE.CREATED).json({ newParent: newParent });
  } catch (error) {
    next(error);
  }
};

export const getAllParents = async (req, res) => {
  try {
    const parents = await Parent.find();
    res.status(STATUS_CODE.OK).json(parents);
  } catch (error) {
    console.error("Error fetching parents:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const findParentById = async (req, res) => {
  const { id } = req.params;
  try {
    const parent = await Parent.findById(id);
    if (!parent) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json({ error: "Parent not found" });
    }
    res.status(STATUS_CODE.OK).json(parent);
  } catch (error) {
    console.error("Error finding parent by ID:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const updateParent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedParent = await Parent.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(STATUS_CODE.OK).send(updatedParent);
  } catch (error) {
    console.error("Error updating parent:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const deleteParent = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedParent = await Parent.findByIdAndDelete(id);
    res.status(STATUS_CODE.OK).send(deletedParent);
  } catch (error) {
    console.error("Error deleting parent:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};
