import express from "express";
import { handelUserMessage, userController } from "./user.controller.js";
import { messageSchemaValidation } from "../message/message.validation.js";
import { validation } from "../../middleware/validation.js";

const userRouter = express.Router();

userRouter.get("/user/:userId", userController);
userRouter.post("/handelUser/:userId", validation(messageSchemaValidation), handelUserMessage);

export default userRouter;
