import * as UserService from './services.js';

export const index = async (req, res, next) => {
    try {
        const users = await UserService.getAllUser();
        const api = process.env.API_URL;
        const data = {
            title: 'User',
            users,
            api
        }

        res.edge('pages/user/index', data);
    } catch (error) {
        next(error)
    }
};