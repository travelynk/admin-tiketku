import * as AuthController from './controllers.js';

export default (router) => {
    const prefix = '/auth';
    
    router.get(prefix + '/login', AuthController.loginPage);
    router.post(prefix + '/login', AuthController.login);
    router.post(prefix + '/logout', AuthController.logout);

}