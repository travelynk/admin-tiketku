import * as TerminalController from './controllers.js';

export default (router) => {
    const prefix = '/terminals';
    router.get(prefix + '/', TerminalController.index);
    router.get(prefix + '/create', TerminalController.createAirport);
    router.get(prefix + '/edit/:id', TerminalController.editAirport);
}