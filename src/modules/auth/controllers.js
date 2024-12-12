import * as AuthService from './services.js';

export const loginPage = async (req, res, next) => {
    try {
        const api = process.env.API_URL;
        res.edge('pages/auth/login', { api });
    } catch (error) {
        next(error)
    }
};

export const login = async (req, res, next) => {
    try {
        const data = await AuthService.login();

        res.json(data);
    } catch (error) {
        next(error)
    }
};