import * as TerminalService from './services.js';
import { getAllAirport } from '../airport/services.js'

export const index = async (req, res, next) => {
    try {
        const token = req.session.token;
        const terminals = await TerminalService.getAllTerminal(token);
        const airports = await getAllAirport(token);
        const api = process.env.API_URL;

        const data = {
            title: 'Terminal',
            api,
            terminals,
            airports
        }

        res.edge('pages/terminal/index', data);
    } catch (error) {
        next(error)
    }
};