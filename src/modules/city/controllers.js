import * as CityService from './services.js';

export const index = async (req, res, next) => {
    try {
        const cities = await CityService.getAllCity();
        const countries = await CityService.getAllCountry();
        const api = process.env.API_URL;
        const data = {
            title: 'City & Country',
            cities,
            countries,
            api
        };

        res.edge('pages/city/index', data);
    } catch (error) {
        next(error)
    };
};