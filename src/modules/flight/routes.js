import * as FlightController from './controllers.js';

export default (router) => {
    const prefix = '/flights';
    router.get(prefix + '/', FlightController.index);
    router.get(prefix + '/create', FlightController.create);
    router.get(prefix + '/edit/:id', FlightController.edit);
}