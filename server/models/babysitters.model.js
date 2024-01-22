import mongoose from "mongoose";
import bcrypt from "bcrypt";

const babysitterSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
    trim: true,
  },
  email: {
    type: String,
    // required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    // required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    // required: true,
    trim: true,
    validate: {
      validator: function (value) {
        // Validate Israeli phone number
        return /^\d{10}$/.test(value);
      },
      message: "Invalid Israeli phone number.",
    },
  },
  role: {
    type: String,
    default: "babysitter",
    trim: true,
  },
  age: {
    type: String,
    // required: true,
    trim: true,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: "Invalid age, age has to be non-negative.",
    },
  },
  address: {
    type: String,
    // required: true,
    trim: true,
  },
  workLocationArea: {
    type: String,
    // required: true,
    trim: true,
  },
  experience: {
    type: String,
    // required: true,
    trim: true,
  },
  image: {
    type: String,
    // required: true,
    trim: true,
  },
  description: {
    type: String,
    // required: true,
    trim: true,
    minLength: 11,
  },
  availability: {
    type: String,
    // required: true,
    trim: true,
  },
});

// Middleware to hash the password before saving
const hashPasswordMiddleware = async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
};

babysitterSchema.pre("save", hashPasswordMiddleware);

const Babysitter = mongoose.model("Babysitter", babysitterSchema);

export default Babysitter;
