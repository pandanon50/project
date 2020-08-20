import routes from "./routes";
import passport from "passport";
import User from "./models/User";
import GithubStrategy from "passport-github";
import { githubLoginCallback } from "./controllers/userController";
// Strategy Use!! ex) github, facebook , naver ...
passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:8000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

// User id Authenticated
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
