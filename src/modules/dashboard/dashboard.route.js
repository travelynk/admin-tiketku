import * as DashboardController from './dashboard.controller.js';

export default (router) => {
    const prefix = '/dashboard';
    router.get(prefix + '/', DashboardController.index);
}