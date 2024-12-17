import { getAllCity, getAllCountry } from '../city/services.js';
import { getAirlines } from '../airline/services.js';
import { getFlights } from '../flight/services.js';

export const index = async (req, res, next) => {
    try {
        const token = req.session.token;
        const cities = await getAllCity();
        const countries = await getAllCountry();
        const airlines = await getAirlines(token);
        const flights = await getFlights(token);

        const data = {
            title: 'Dashboard',
            citiesQty: cities.length,
            countriesQty: countries.length,
            airlinesQty: airlines.length,
            flightsQty: flights.length,
            user: req.session.user
        }

        res.edge('pages/dashboard/index', data);
    } catch (error) {
        next(error)
    }
};