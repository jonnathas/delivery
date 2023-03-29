import express from 'express';
const managerRouter = express.Router();

import managerController from './../controllers/managerController.js';

managerRouter.get('/', managerController.index);

export default managerRouter;