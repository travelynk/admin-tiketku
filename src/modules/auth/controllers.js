import { Error400, Error403 } from "../../utils/customError.js";

export const loginPage = async (req, res, next) => {
    try {
        if (req.session.token) {
            return res.redirect('/admin/dashboard');
        }

        const api = process.env.API_URL;
        res.edge('pages/auth/login', { api });
    } catch (error) {
        next(error)
    }
};

export const login = async (req, res) => {
    try {
        if (!req.body) {
            throw new Error400('Invalid request');
        }
        const { token, user } = req.body;

        if (user.role !== 'admin') {
            throw new Error403('Maaf, Anda tidak diizinkan untuk mengakses sumber daya ini.');
        }

        req.session.token = token;
        req.session.user = user;

        res.status(200).json({
            status: 'success',
            message: 'Login successful',
            data: null
        });
    } catch (error) {
        if (error instanceof Error400) {
            return res.status(400).json({
                status: 'error',
                message: error.message,
                data: null
            });
        }
        if (error instanceof Error403) {
            return res.status(403).json({
                status: 'error',
                message: error.message,
                data: null
            });
        };
        return res.status(500).json({
            status: 'error',
            message: 'Internal server error',
            data: null
        });
    }
};

export const logout = async (req, res) => {
    try {
        if (!req.session.token) {
            throw new Error400('Invalid request');
        }

        req.session.destroy();

        res.status(200).json({
            status: 'success',
            message: 'Logout successful',
            data: null
        });
    } catch (error) {
        if (error instanceof Error400) {
            return res.status(400).json({
                status: 'error',
                message: error.message,
                data: null
            });
        }
        return res.status(500).json({
            status: 'error',
            message: 'Internal server error',
            data: null
        });
    }
}
