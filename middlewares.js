import routes from "./routes";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import multer from "multer";

const s3 = new aws.S3({
  secretAccessKey: process.env.AW_PRIVATE_KEY,
  accessKeyId: process.env.AWS_KEY,
});

const multerMeet = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "meetproject/meet",
  }),
});

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "MeetMoney";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadMeet = multerMeet.single("imgFile");
