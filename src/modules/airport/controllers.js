import * as AirportService from './services.js';

export const index = async (req, res, next) => {
    try {
        const airports = await AirportService.getAllAirport();

        const data = {
            title: 'Airports',
            airports
        }

        res.edge('pages/airport/index', data);
    } catch (error) {
        next(error)
    }
};

export const createAirport = async (req, res, next) => {
    try {
        const api = process.env.API_URL;
        const data = {
            title: 'Airport',
            sub: 'Create',
            api
        }

        res.edge('pages/airport/create', data);
    } catch (error) {
        next(error)
    }
};

export const editAirport = async (req, res, next) => {
    try {
        const airport = await AirportService.getAirportById(req.params.id);
        const data = {
            title: 'Airport',
            sub: 'Edit',	
            airport
        }

        res.edge('pages/airport/edit', data);
    } catch (error) {
        next(error)
    }
};