import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Babysitter from "../models/babysitters.model.js";
import STATUS_CODE from "../constants/statusCodes.js";

const generateToken = (babysitterId, babysitterRole) => {
  return jwt.sign({ babysitterId, babysitterRole }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const loginBabySitter = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(`Login attempt for email: ${email}`);

  try {
    const babysitter = await Babysitter.findOne({ email });

    if (!babysitter) {
      console.log(`Babysitter with email ${email} not found.`);
      return res
        .status(STATUS_CODE.UNAUTHORIZED)
        .json({ error: "Invalid credentials" });
    }

    console.log(`Retrieved hashed password: ${babysitter.password}`);
    const comparePassword = await bcrypt.compare(password, babysitter.password);
    if (babysitter && comparePassword) {
      console.log(`Babysitter ${email} successfully logged in.`);

      const token = generateToken(babysitter._id, babysitter.role);
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

export const signupBabySitter = async (req, res, next) => {
  try {
    const {
      username,
      email,
      password,
      role,
      age,
      address,
      workLocationArea,
      experience,
      image,
      description,
      availability,
      phoneNumber,
    } = req.body;
    console.log(req.body);
    if (
      !(
        username &&
        email &&
        password &&
        phoneNumber &&
        age &&
        address &&
        workLocationArea &&
        experience &&
        image &&
        description &&
        availability
      )
    ) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({ error: "Please provide all fields" });
    }

    const babysitter = await Babysitter.findOne({ email });
    if (babysitter) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({ error: "Babysitter already exists" });
    }
    const newBabysitter = await Babysitter.create({
      username,
      email,
      password,
      age,
      address,
      workLocationArea,
      experience,
      image,
      description,
      availability,
      phoneNumber,
      role: role || "babysitter",
    });

    res.status(STATUS_CODE.CREATED).json({ newBabysitter });
  } catch (error) {
    next(error);
  }
};

export const getAllBabySitters = async (req, res) => {
  try {
    const babysitters = await Babysitter.find();
    res.status(STATUS_CODE.OK).json(babysitters);
  } catch (error) {
    console.error("Error fetching babysitters:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const findBabySitterById = async (req, res) => {
  const { id } = req.params;
  try {
    const babysitter = await Babysitter.findById(id);
    if (!babysitter) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json({ error: "Babysitter not found" });
    }
    res.status(STATUS_CODE.OK).json(babysitter);
  } catch (error) {
    console.error("Error finding babysitter by ID:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const updateBabySitter = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBabySitter = await Babysitter.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(STATUS_CODE.OK).send(updatedBabySitter);
  } catch (error) {
    console.error("Error updating babysitter:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const deleteBabySitter = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBabySitter = await Babysitter.findByIdAndDelete(id);
    res.status(STATUS_CODE.OK).send(deletedBabySitter);
  } catch (error) {
    console.error("Error deleting babysitter:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};
