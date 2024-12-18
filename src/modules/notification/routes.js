import * as AirportController from './controllers.js';

export default (router) => {
    const prefix = '/notifications';
    router.get(prefix + '/', AirportController.index);
}