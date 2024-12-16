import { ErrorCustom } from '../../utils/customError.js';

export const getAllCity = async () => {
    const response = await fetch(process.env.API_URL + '/api/v1/cities');
    const result = await response.json();

    if (response.status !== 200) {
        throw new ErrorCustom(result.message, response.code);
    }

    return result.data;
};