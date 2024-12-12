import * as DashboardController from './controllers.js';

export default (router) => {
    const prefix = '/dashboard';
    router.get(prefix + '/', DashboardController.index);
}