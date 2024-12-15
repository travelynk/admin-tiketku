import * as VoucherController from './controllers.js';

export default (router) => {
    const prefix = '/vouchers';
    router.get(prefix + '/', VoucherController.index);
    router.get(prefix + '/add', VoucherController.add);
    router.get(prefix + '/edit/:id', VoucherController.edit);
}