import * as AirportService from './services.js';
import { getAllCity } from '../city/services.js';

export const index = async (req, res, next) => {
    try {
        const token = req.session.token;
        const airports = await AirportService.getAllAirport(token);
        const cities = await getAllCity();
        const api = process.env.API_URL;
        const data = {
            title: 'Airport',
            airports,
            cities,
            api
        };

        res.edge('pages/airport/index', data);
    } catch (error) {
        next(error)
    };
};

export const edit = async (req, res, next) => {
    try {
        const token = req.session.token;
        const airport = await AirportService.getAirportById(req.params.id, token);
        const cities = await getAllCity();
        const api = process.env.API_URL;
        const data = {
            title: 'Airport',
            airport,
            cities,
            api
        };

        res.edge('pages/airport/edit', data);
    } catch (error) {
        next(error);
    };
};