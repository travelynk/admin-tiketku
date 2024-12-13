import { Error401, Error403 } from '../utils/customError.js';

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.session.token) {
            throw new Error401('Maaf, Anda harus login terlebih dahulu.');
        }

        if (req.session.user.role !== 'admin') {
            throw new Error403('Maaf, Anda tidak diizinkan untuk mengakses sumber daya ini.');
        }

        next();
    } catch (error) {
        next(error);
    }
};

export default authMiddleware;
