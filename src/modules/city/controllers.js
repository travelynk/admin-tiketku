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

export const edit = async (req, res, next) => {
    try {
        const city = await CityService.getCityById(req.params.id);
        const countries = await CityService.getAllCountry();
        const api = process.env.API_URL;
        const data = {
            title: 'City & Country',
            city,
            countries,
            api
        };

        res.edge('pages/city/edit', data);
    } catch (error) {
        next(error)
    };
};

export const editCountry = async (req, res, next) => {
    try {
        const country = await CityService.getCountryById(req.params.id);
        const api = process.env.API_URL;
        const data = {
            title: 'City & Country',
            country,
            api
        };

        res.edge('pages/city/edit-country', data);
    } catch (error) {
        next(error)
    };
};