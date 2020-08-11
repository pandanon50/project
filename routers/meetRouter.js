import express from 'express';
import routes from '../routes';
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
} from '../controllers/meetController';
import { uploadMeet } from '../middlewares';

const meetRouter = express.Router();

meetRouter.get(routes.upload, getUpload);
meetRouter.post(routes.upload, uploadMeet, postUpload);
meetRouter.get(routes.meetDetail(), meetDetail);
meetRouter.get(routes.editMeet(), getEditMeet);
meetRouter.post(routes.editMeet(), postEditMeet);
meetRouter.get(routes.plusMember(), getPlusMember);
meetRouter.post(routes.plusMember(), postPlusMember);
meetRouter.get(routes.memberDetail(), getMemberDetail);
meetRouter.post(routes.memberDetail(), postMemberDetail);
meetRouter.get(routes.deleteMeet(), deleteMeet);

export default meetRouter;
