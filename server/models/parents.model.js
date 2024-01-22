import mongoose from "mongoose";
import bcrypt from "bcrypt";

const parentSchema = new mongoose.Schema({
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
  address: {
    type: String,
    // required: true,
    trim: true,
  },
  numberOfKids: {
    type: Number,
    // required: true,
    trim: true,
  },
  role: {
    type: String,
    default: "parent",
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

parentSchema.pre("save", hashPasswordMiddleware);

const Parent = mongoose.model("Parent", parentSchema);

export default Parent;
