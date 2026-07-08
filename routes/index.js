import {Router} from 'express';
import emailRouter from './email.route.js';

const appRouter = Router();

appRouter.use('/email', emailRouter);

export default appRouter;