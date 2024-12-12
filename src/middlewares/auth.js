import { res401, res500 } from '../utils/response.js';

const authMiddleware = async (req, res, next) => {
    try {
        //cek token in local storage
        const token = req.cookies.token;
        if (!token) {
            return res401('Unauthorized', res);
        }
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res401('Token expired. Please log in again.', res); 
        } else if (error.name === 'JsonWebTokenError') {
            return res401('Invalid token. Please log in again.', res); 
        } else {
            // console.error(`Authentication error: ${error.message}`);
            return res500('Internal Server Error', res); 
        }
    }
};

export default authMiddleware;
