import * as VoucherController from './controllers.js';

export default (router) => {
    const prefix = '/vouchers';
    router.get(prefix + '/', VoucherController.index);
}