import { ErrorCustom } from '../../utils/customError.js';

export const getAllTerminal = async () => {
    const response = await fetch(process.env.API_URL + '/api/v1/terminals');
    const result = await response.json();

    if (response.status !== 200) {
        throw new ErrorCustom(result.message, response.code);
    }

    return result.data;
};

export const getTerminalById = async (id) => {
    const response = await fetch(process.env.API_URL + '/api/v1/terminals/' + id);
    const result = await response.json();

    if (response.status !== 200) {
        throw new ErrorCustom(result.message, response.code);
    }

    return result.data;
};