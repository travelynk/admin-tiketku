import { ErrorCustom } from '../../utils/customError.js';

export const getAllAirport = async () => {
    const response = await fetch(process.env.API_URL + '/api/v1/airports');
    const result = await response.json();

    if (response.status !== 200) {
        throw new ErrorCustom(result.message, response.code);
    }

    return result.data;
};

export const getAirportById = async (id) => {
    const response = await fetch(process.env.API_URL + '/api/v1/airports/' + id);
    const result = await response.json();

    if (response.status !== 200) {
        throw new ErrorCustom(result.message, response.code);
    }

    return result.data;
};