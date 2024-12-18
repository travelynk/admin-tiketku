import * as FlightService from "./services.js";
import formatTime from "../../utils/formatTime.js";

export const index = async (req, res, next) => {
    try {
        const token = req.session.token;
        let flights = await FlightService.getFlights(token);

        flights = flights.map(flight => {
            return {
                ...flight,
                departure: {
                    ...flight.departure,
                    schedule: formatTime(flight.departure.schedule).date + " " + formatTime(flight.departure.schedule).time
                },
                arrival: {
                    ...flight.arrival,
                    schedule: formatTime(flight.arrival.schedule).date + " " + formatTime(flight.arrival.schedule).time
                }
            }
        });

        const api = process.env.API_URL;

        const data = {
            title: "Flight",
            flights,
            api
        }
        
        res.edge('pages/flight/index', data);
    } catch (error) {
        next(error)
    }
};

export const create = async (req, res, next) => {
    try {
        const token = req.session.token;
        const terminals = await FlightService.getTerminalWithAirport(token);
        const airlines = await FlightService.getAirline(token);
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
        next(error)
    }
};

export const edit = async (req, res, next) => {
    try {
        const token = req.session.token;
        const terminals = await FlightService.getTerminalWithAirport(token);
        const airlines = await FlightService.getAirline(token);
        const flight = await FlightService.getFlight(req.params.id, token);
        const api = process.env.API_URL;

        const data = { 
            title: "Flight", 
            sub: "Edit",
            airlines,
            terminals,
            flight,
            api
        }

        res.edge('pages/flight/edit', data);
    } catch (error) {
        next(error)
    }
};