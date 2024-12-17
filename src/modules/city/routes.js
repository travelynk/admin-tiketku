import * as CityController from './controllers.js';

export default (router) => {
    const prefix = '/cities';
    router.get(prefix + '/', CityController.index);
    router.get(prefix + '/edit/:id', CityController.edit);
    router.get(prefix + '/country/edit/:id', CityController.editCountry);
};