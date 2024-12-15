import { ErrorCustom } from '../../utils/customError.js';

export const getFlights = async () => {
    const response = await fetch(process.env.API_URL + '/api/v1/flights');
    const result = await response.json();

    if (response.status !== 200) {
        throw new ErrorCustom(result.message, response.code);
    }

    return result.data;

};

export const getFlight = async (id) => {
    const response = await fetch(process.env.API_URL + '/api/v1/flights/' + id);
    const result = await response.json();

    if (response.status !== 200) {
        throw new ErrorCustom(result.message, response.code);
    }

    return result.data;
};

export const getTerminalWithAirport = async () => {
    const response = await fetch(process.env.API_URL + '/api/v1/terminals');
    const result = await response.json();

    if (response.status !== 200) {
        throw new ErrorCustom(result.message, response.code);
    }

    return result.data;
};

export const getAirline = async () => {
    const response = await fetch(process.env.API_URL + '/api/v1/airlines');
    const result = await response.json();

    if (response.status !== 200) {
        throw new ErrorCustom(result.message, response.code);
    }

    return result.data;
};