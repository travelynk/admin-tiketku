import { Router } from 'express';
import authRouter from './auth/routes.js';
import dashboardRouter from './dashboard/routes.js';
import airlineRouter from './airline/routes.js';
import airportRouter from './airport/routes.js';
import cityRouter from './city/routes.js';
import flightRouter from './flight/routes.js';
import userRouter from './user/routes.js';
import voucherRouter from './voucher/routes.js';

export default (app) => {
    const router = Router();

    app.get('/', (req, res) => {
        res.redirect('/admin/auth/login');
    });

    // prefix all routes
    app.use('/admin', router);

    // all main routers
    authRouter(router);
    dashboardRouter(router);
    airlineRouter(router);
    airportRouter(router);
    cityRouter(router);
    flightRouter(router);
    userRouter(router);
    voucherRouter(router);

};