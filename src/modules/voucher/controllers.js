export const index = async (req, res, next) => {
    try {
        res.edge('pages/voucher/index', { title: "voucher" });
    } catch (error) {
        next(error)
    }
};