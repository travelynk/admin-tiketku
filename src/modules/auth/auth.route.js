import * as AuthController from './auth.controller.js';

export default (router) => {
    const prefix = '/auth';
    router.get(prefix + '/login', AuthController.login);
}