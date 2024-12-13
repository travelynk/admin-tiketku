import express, { json, urlencoded } from "express";
import morgan from 'morgan';
import module from '../modules/index.js';
import * as ErrorHandler from '../middlewares/errorHandler.js';
import edgeMiddleware from "../middlewares/edge.js";
import session from "express-session";

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/', express.static('public'));
app.use(edgeMiddleware);
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        maxAge: 1000 * 60 * 60, // 1 hour
        secure: false,
        httpOnly: true
    }
})
);

module(app);

app.use(ErrorHandler.handleNotFound);
app.use(ErrorHandler.handleOther);

export default app;