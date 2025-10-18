import mongoose from "mongoose";
import User from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const TOKEN_EXPIRED_IN = process.env.TOKEN_EXPIRED_IN || "24h";
const JWT_SECRET = process.env.JWT_SECRET;

export async function Register(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email | !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashPassword,
    });

    await user.save();
    if (!JWT_SECRET) throw new Error("JWT Secret not found");
    const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET, {
      expiresIn: TOKEN_EXPIRED_IN,
    });
    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      token,
      user: { id: user._id.toString(), name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Register Error", err);
    return res
      .status(500)
      .json({ success: false, message: "Register failed | Server Error" });
  }
}

export async function Login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(409)
        .json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(409)
        .json({ success: false, message: "Invalid email or password" });
    }

    if (!JWT_SECRET) throw new Error("JWT Secret not found");
    const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET, {
      expiresIn: TOKEN_EXPIRED_IN,
    });

    return res.status(201).json({
      success: true,
      message: "Login Successfully",
      token,
      user: { id: user._id.toString(), name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Login Error", err);
    return res
      .status(500)
      .json({ success: false, message: "Login failed | Server Error" });
  }
}
