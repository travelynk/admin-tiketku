import { ErrorCustom } from '../../utils/customError.js';

export const getAllUser = async (token) => {
    const response = await fetch(process.env.API_URL + '/api/v1/users', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    });
    const result = await response.json();

    if (response.status !== 200) {
        throw new ErrorCustom(result.message, response.code);
    }

    return result.data;
};