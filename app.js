import express from "express";
import "core-js";
import routes from "./routes.js";
import morgan from "morgan";
import helmet from "helmet";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import { localsMiddleware } from "./middlewares";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import meetRouter from "./routers/meetRouter";

const app = express();

app.set("view engine", "pug");

app.use(localsMiddleware);
app.use(helmet());
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.meet, meetRouter);

export default app;
