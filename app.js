import "./init";
import express from "express";
import "core-js";
import routes from "./routes.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
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
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
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

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.meet, meetRouter);

export default app;
