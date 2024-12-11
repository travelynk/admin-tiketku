import express, { json, urlencoded } from "express";
import morgan from 'morgan';
import module from '../modules/index.js';
import * as ErrorHandler from '../middlewares/errorHandler.js';
import edgeMiddleware from "../middlewares/edge.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/', express.static('public'));
app.use(edgeMiddleware);

module(app);

app.use(ErrorHandler.handleNotFound);
app.use(ErrorHandler.handleOther);

export default app;