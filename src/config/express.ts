import express from 'express';
import { cors } from '../middelwares/cors';
import compression from 'compression'
import helmet from 'helmet'

import userController from '../controllers/userController'
import phoneController from '../controllers/deviceController';
import dataController from '../controllers/dataController'
import postingsController from '../controllers/postingsController';

const app = express();

app.use(helmet())
app.use(cors());
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userController);
app.use('/device', phoneController)
app.use('/data', dataController)
app.use('/postings', postingsController)

export default app
