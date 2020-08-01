import express from 'express';
import 'core-js';
import routes from './routes.js';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyparser from 'body-parser';
import cookieparser from 'cookie-parser';

import globalRouter from './router/globalRouter';
import userRouter from './router/userRouter';
import meetRouter from './router/meetRouter';

const app = express();

app.use(helmet());
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.meet, meetRouter);

export default app;
