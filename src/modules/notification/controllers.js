import * as Notification from './services.js';

export const index = async (req, res, next) => {
    try {
        const token = req.session.token;
        let notifications = await Notification.getAllNotification(token);

        notifications = notifications.filter(notification => notification.userId === null).map(notification => {
            return {
                ...notification,
                createdAt: new Date(notification.createdAt).toLocaleString('id-ID'),
                updatedAt: new Date(notification.updatedAt).toLocaleString('id-ID')
            };
        });

        const api = process.env.API_URL;
        const data = {
            title: 'Notification',
            notifications,
            api
        };

        res.edge('pages/notification/index', data);
    } catch (error) {
        next(error)
    };
};