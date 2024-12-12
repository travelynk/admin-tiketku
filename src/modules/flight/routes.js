import * as FlightController from './controllers.js';

export default (router) => {
    const prefix = '/flights';
    router.get(prefix + '/', FlightController.index);
}