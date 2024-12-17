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

export const edit = async (req, res, next) => {
    try {
        const token = req.session.token;
        const id = req.params.id;
        const terminal = await TerminalService.getTerminalById(id, token);
        const airports = await getAllAirport(token);
        const api = process.env.API_URL;
        console.log(terminal)
        const data = {
            title: 'Terminal',
            api,
            terminal,
            airports
        }

        res.edge('pages/terminal/edit', data);
    } catch (error) {
        next(error)
    }
};