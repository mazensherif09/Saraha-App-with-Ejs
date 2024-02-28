import { userModel } from "../../../DBconection/models/user.model.js";
import { catchError } from "../../middleware/catchError.js";
import bcrypt from "bcrypt";

export const loginController = (req, res) => {
  res.render("login.ejs", {
    error: req.query?.error,
    session: undefined,
  });
};

export const handleLogin = catchError(async (req, res, next) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    req.session.isLoggedIn = true;
    req.session.userId = user._id;
    req.session.name = user.name;
    res.redirect("/message");
  }
  res.redirect("/login?error=Invalid credentials email or password wronge");
});

export const handleLogout = catchError(async (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});
