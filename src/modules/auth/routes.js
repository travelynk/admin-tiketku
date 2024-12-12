import * as AuthController from './controllers.js';

export default (router) => {
    const prefix = '/auth';
    router.get(prefix + '/login', AuthController.login);
}