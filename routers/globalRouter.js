import express from "express";
import passport from "passport";
import routes from "../routes";
import { onlyPublic, onlyPrivate } from "../middlewares";
import {
  getJoin,
  getLogin,
  postLogin,
  logout,
  githubLogin,
  postJoin,
  postGithubLogin,
} from "../controllers/userController";
import { home } from "../controllers/meetController";
const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);

globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", {
    failureRedirect: "/login",
  }),
  postGithubLogin
);

export default globalRouter;
