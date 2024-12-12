import * as AirlineController from './controllers.js';

export default (router) => {
    const prefix = '/airlines';
    router.get(prefix + '/', AirlineController.index);
}