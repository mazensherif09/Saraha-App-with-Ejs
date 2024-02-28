import { userModel } from "../../DBconection/models/user.model.js";
import bcrypt from 'bcrypt'
import { AppError } from "../utils/AppError.js";

export const checkEmail = async (req, res, next) => {
  const find = await userModel.findOne({ email: req.body.email });
  if (find) return res.redirect("/register?error=user already exists")
  // 409 conflict

  req.body.password = bcrypt.hashSync(req.body.password, 8)

  next();
};
