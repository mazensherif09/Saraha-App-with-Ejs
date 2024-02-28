import { messageModel } from "../../../DBconection/models/message.model.js";
import { catchError } from "../../middleware/catchError.js";
import { ApiFeatures } from "../../utils/apiFeatures.js";

const messageController = catchError(async (req, res) => {
  let fullUrl =req.protocol + "://" + req.get("host") + "/user/" + req.session?.userId;

  if (!req.session.isLoggedIn) return res.redirect("/login");

  let apiFeatures = new ApiFeatures(messageModel.find({ userId: req.session.userId }),
  req.query).fields().sort().search().pagination().filter();

  let messages = await apiFeatures.mongooseQuery; 
  res.render("message.ejs", { session: req.session, fullUrl, messages , apiFeatures });
});



export {messageController };
