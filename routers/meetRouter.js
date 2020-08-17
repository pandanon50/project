import express from "express";
import routes from "../routes";
import {
  getMemberDetail,
  postMemberDetail,
  getPlusMember,
  postPlusMember,
  getUpload,
  meetDetail,
  getEditMeet,
  deleteMeet,
  postUpload,
  postEditMeet,
} from "../controllers/meetController";
import { uploadMeet, onlyPrivate } from "../middlewares";

const meetRouter = express.Router();

// Upload
meetRouter.get(routes.upload, onlyPrivate, getUpload);
meetRouter.post(routes.upload, onlyPrivate, uploadMeet, postUpload);

// Meet Detail
meetRouter.get(routes.meetDetail(), onlyPrivate, meetDetail);

// Edit Meet
meetRouter.get(routes.editMeet(), onlyPrivate, getEditMeet);
meetRouter.post(routes.editMeet(), onlyPrivate, postEditMeet);

// Plus Member
meetRouter.get(routes.plusMember(), onlyPrivate, getPlusMember);
meetRouter.post(routes.plusMember(), onlyPrivate, postPlusMember);

// Member Detail
meetRouter.get(routes.memberDetail(), onlyPrivate, getMemberDetail);
meetRouter.post(routes.memberDetail(), onlyPrivate, postMemberDetail);

// Delete Meet
meetRouter.get(routes.deleteMeet(), onlyPrivate, deleteMeet);

export default meetRouter;
