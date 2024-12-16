import * as AirlineController from './controllers.js';

export default (router) => {
    const prefix = '/airlines';
    router.get(prefix + '/', AirlineController.index);
    router.get(prefix + '/create', AirlineController.create);
    router.get(prefix + '/edit/:id', AirlineController.edit);
}