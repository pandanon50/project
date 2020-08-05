import express from 'express';
import routes from '../routes';
import { meet, upload, meetDetail, editMeet, deleteMeet } from '../controllers/meetController';

const meetRouter = express.Router();

meetRouter.get(routes.meet, meet);
meetRouter.get(routes.upload, upload);
meetRouter.get(routes.meetDetail, meetDetail);
meetRouter.get(routes.editMeet, editMeet);
meetRouter.get(routes.deleteMeet, deleteMeet);

export default meetRouter;
