import express from 'express';
import routes from '../routes';
import { getPlusMember, postPlusMember, getUpload, meetDetail, editMeet, deleteMeet, postUpload } from '../controllers/meetController';
import { uploadMeet } from '../middlewares';

const meetRouter = express.Router();

meetRouter.get(routes.upload, getUpload);
meetRouter.post(routes.upload, uploadMeet, postUpload);
meetRouter.get(routes.meetDetail(), meetDetail);
meetRouter.get(routes.editMeet(), editMeet);
meetRouter.get(routes.plusMember(), getPlusMember);
meetRouter.post(routes.plusMember(), postPlusMember);

meetRouter.get(routes.deleteMeet, deleteMeet);

export default meetRouter;
