import * as UserController from './controllers.js';

export default (router) => {
    const prefix = '/users';
    router.get(prefix + '/', UserController.index);
}