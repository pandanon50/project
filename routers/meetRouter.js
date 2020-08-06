import express from 'express';
import routes from '../routes';
import { meet, getUpload, meetDetail, editMeet, deleteMeet, postUpload } from '../controllers/meetController';
import { uploadMeet } from '../middlewares';

const meetRouter = express.Router();

meetRouter.get(routes.upload, getUpload);
meetRouter.post(routes.upload, uploadMeet, postUpload);
meetRouter.get(routes.meetDetail(), meetDetail);
meetRouter.get(routes.editMeet, editMeet);
meetRouter.get(routes.deleteMeet, deleteMeet);

export default meetRouter;
