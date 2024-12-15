import * as VoucherService from './services.js';

export const index = async (req, res, next) => {
    try {
        const response = await VoucherService.getAllVouchers();
        const data = await response.data;
        res.edge('pages/voucher/index', { title: "voucher", data });
    } catch (error) {
        next(error)
    }
};

export const add = async (req, res, next) => {
    try {
        const apiUrl = process.env.API_URL
        res.edge('pages/voucher/add', { title: "voucher" , apiUrl });
    } catch (error) {
        next(error)
    }
};

export const edit = async (req, res, next) => {
    try {
        const apiUrl = process.env.API_URL
        const { id } = req.params;
        const response = await VoucherService.getVoucherById(id);
        const data = await response.data;
        res.edge('pages/voucher/edit', { data , apiUrl});
    } catch (error) {
        next(error)
    }
};

