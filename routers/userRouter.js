import express from "express";
import routes from "../routes";
import { onlyPrivate } from "../middlewares";
import { changePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.changePassword, onlyPrivate, changePassword);

export default userRouter;
