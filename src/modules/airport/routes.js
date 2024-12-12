import * as AirportController from './controllers.js';

export default (router) => {
    const prefix = '/airports';
    router.get(prefix + '/', AirportController.index);
}