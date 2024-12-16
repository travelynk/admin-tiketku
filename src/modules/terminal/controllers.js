import * as TerminalService from './services.js';
import { getAllAirport } from '../airport/services.js'

export const index = async (req, res, next) => {
    try {
        const terminals = await TerminalService.getAllTerminal();
        const airports = await getAllAirport();
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