import express from 'express';
import routes from '../routes';
import { join, home, login, logout } from '../Controller/userController';
const globalRouter = express.Router();

globalRouter.get(routes.join, join);
globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
