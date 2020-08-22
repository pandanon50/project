import express from "express";
import "core-js";
import routes from "./routes.js";
import session from "express-session";
import path from "path";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import flash from "express-flash";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import passport from "passport";
import dotenv from "dotenv";
import { localsMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import meetRouter from "./routers/meetRouter";

import "./passport";

dotenv.config();

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  // Cookie Use!!
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.meet, meetRouter);

export default app;
