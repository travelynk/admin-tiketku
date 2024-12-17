import * as AirlineService from './services.js';

export const index = async (req, res, next) => {
    try {
        const token = req.session.token;
        const airlines = await AirlineService.getAirlines(token);
        res.edge('pages/airline/index', { title: "Airline", airlines, api: process.env.API_URL });
    } catch (error) {
        next(error)
    }
};

export const create = async (req, res, next) => {
    try {
        const data = { 
            title: "Airline", 
            sub: "Create",
            api: process.env.API_URL
        }


        res.edge('pages/airline/create', data);
    } catch (error) {
        next(error)
    }
};


export const edit = async (req, res, next) => {
    try {
        const { id } = req.params;
        const token = req.session.token;
        const airline = await AirlineService.getAirlineById(id, token);

        if (!airline) {
            // Jika maskapai tidak ditemukan, lemparkan error
            const error = new Error("Airline not found");
            error.status = 404;
            throw error;
        }

        const data = { 
            title: "Airline", 
            sub: "Edit",
            airline,
            api: process.env.API_URL
        };

        res.edge('pages/airline/edit', data); // Render halaman edit dengan data maskapai
    } catch (error) {
        next(error);
    }
};

