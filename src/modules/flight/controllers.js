import * as FlightService from "./services.js";

export const index = async (req, res, next) => {
    try {
        const flights = await FlightService.getFlights();

        res.edge('pages/flight/index', { title: "Flight", flights });
    } catch (error) {
        console.log(error);
        next(error)
    }
};

export const create = async (req, res, next) => {
    try {
        const terminals = await FlightService.getTerminalWithAirport();
        const airlines = await FlightService.getAirline();
        const api = process.env.API_URL;

        const data = { 
            title: "Flight", 
            sub: "Create",
            airlines,
            terminals,
            api
        }

        res.edge('pages/flight/create', data);
    } catch (error) {
        console.log(error);
        next(error)
    }
}