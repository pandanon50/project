import express from 'express';
import routes from '../routes';
import { getJoin, getLogin, postLogin, logout, postJoin } from '../controllers/userController';
import { home } from '../controllers/meetController';
const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

export default globalRouter;
