import * as TerminalController from './controllers.js';

export default (router) => {
    const prefix = '/terminals';
    router.get(prefix + '/', TerminalController.index);
}