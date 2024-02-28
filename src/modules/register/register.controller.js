import { userModel } from "../../../DBconection/models/user.model.js";
import sendEmail from "../../emails/sendEmail.js";
import { catchError } from "../../middleware/catchError.js";

export const registerController = (req, res) => {
  res.render("register.ejs", {
    errorMessage: req.flash('error'),
    error: req.query?.error,
    session : undefined,
  });
};

export const handleRegister = catchError(async (req, res, next) => {
  if(!req.error){
    sendEmail(req.body.email);
    await userModel.insertMany(req.body);
    return res.redirect('/login')
  } 

  req.flash('error', req.error)
  res.redirect('/register')
 });

