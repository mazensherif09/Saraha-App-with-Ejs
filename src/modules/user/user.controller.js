import { userModel } from "../../../DBconection/models/user.model.js";
import { catchError } from "../../middleware/catchError.js";
import { messageModel } from "../../../DBconection/models/message.model.js";

const userController = catchError(async (req, res) => {
  let user = await userModel.findById(req.params.userId);
  res.render("user.ejs", {
    session: undefined,
    userId: req.params.userId,
    user,
    errorMessage: req.flash('error'),
  });
});

const handelUserMessage = catchError(async (req, res) => {
  if (!req.error) {
    await messageModel.insertMany({
      userId: req.params.userId,
      message: req.body.message,
    });
    res.redirect(`/user/${req.params.userId}`);
  }

  req.flash("error", req.error);
  res.redirect(`/user/${req.params.userId}`);
});

export { userController, handelUserMessage };
