import routes from './routes';

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'MeetMoney';
    res.locals.routes = routes;
    next();
};
