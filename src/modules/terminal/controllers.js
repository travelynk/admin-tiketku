import * as TerminalService from './services.js';

export const index = async (req, res, next) => {
    try {
        const terminals = await TerminalService.getAllTerminal();

        const data = {
            title: 'Terminal',
            terminals
        }

        res.edge('pages/terminal/index', data);
    } catch (error) {
        next(error)
    }
};

export const create = async (req, res, next) => {
    try {
        const api = process.env.API_URL;
        const data = {
            title: 'Terminal',
            sub: 'Create',
            api
        }

        res.edge('pages/terminal/create', data);
    } catch (error) {
        next(error)
    }
};

export const edit = async (req, res, next) => {
    try {
        const terminal = await TerminalService.getTerminalById(req.params.id);
        const data = {
            title: 'Terminal',
            sub: 'Edit',
            terminal
        }

        res.edge('pages/terminal/edit', data);
    } catch (error) {
        next(error)
    }
};