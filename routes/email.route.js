import {Router} from 'express';
import { generateEmail } from '../controller/email.controller.js';

const emailRouter = Router();

emailRouter.post('/generate', generateEmail);

export default emailRouter;