import * as CityController from './controllers.js';

export default (router) => {
    const prefix = '/cities';
    router.get(prefix + '/', CityController.index);
}