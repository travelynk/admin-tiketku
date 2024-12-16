import * as AirportController from './controllers.js';

export default (router) => {
    const prefix = '/airports';
    router.get(prefix + '/', AirportController.index);
    router.get(prefix + '/create', AirportController.createAirport);
    router.get(prefix + '/edit/:id', AirportController.editAirport);
}