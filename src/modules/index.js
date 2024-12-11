import { Router } from 'express';
import authRouter from './auth/auth.route.js';
import dashboardRouter from './dashboard/dashboard.route.js';

export default (app) => {
    const router = Router();

    // prefix all routes
    app.use('/admin', router);

    // all main routers
    authRouter(router);
    dashboardRouter(router);

};