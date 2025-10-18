import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const authMiddleware = async (req, res, next) => {
  const authHeaders = req.headers.authorization;
  // console.log(authHeaders);
  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "not authorize or token is missing" });
  }
  const token = authHeaders.split(" ")[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(payload.id).select("-password");
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("JWT verification failed");
    return res
      .status(401)
      .json({ success: false, message: "Token invalid or Expired" });
  }
};
