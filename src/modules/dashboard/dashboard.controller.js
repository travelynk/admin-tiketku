import * as DashboardService from './dashboard.service.js';

export const index = async (req, res, next) => {
    try {
        const data = await DashboardService.index();

        res.edge('pages/dashboard/index', { login: data.result, foods: data.foods });
    } catch (error) {
        next(error)
    }
};