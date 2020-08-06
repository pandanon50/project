import routes from './routes';
import multer from 'multer';

const multerMeet = multer({ dest: 'uploads/img/' });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'MeetMoney';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1,
    };
    next();
};

export const uploadMeet = multerMeet.single('imgFile');
