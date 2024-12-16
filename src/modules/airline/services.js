import { ErrorCustom } from "../../utils/customError.js";

export const getAirlines = async () => {
    // const response = await fetch(process.env.API_URL + `/api/v1/airlines/${id}`);
    const response = await fetch(process.env.API_URL + `/api/v1/airlines`);
    const result = await response.json();

    if (response.status !== 200) {
        throw new ErrorCustom(result.message, response.code);
    }

    return result.data;
};

export const getAirlineById = async (id) => {
    // const response = await fetch(process.env.API_URL + `/api/v1/airlines/${id}`);
    const response = await fetch(process.env.API_URL + `/api/v1/airlines/${id}`);
    const result = await response.json();

    if (response.status !== 200) {
        throw new ErrorCustom(result.message, response.code);
    }

    return result.data;
};