import express from 'express';
import { apiRout } from '../routes/api.js';
import { corsMiddle, limiter } from '../middleware/inputHandler.js';
import helmet from 'helmet';

export const app = express();

app.use((req,res,next) => corsMiddle(req, res, next));
app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use("/api", apiRout);