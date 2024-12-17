import * as AirportService from './services.js';
import { getAllCity } from '../city/services.js';

export const index = async (req, res, next) => {
    try {
        const airports = await AirportService.getAllAirport();
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