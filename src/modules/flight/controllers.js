export const index = async (req, res, next) => {
    try {
        res.edge('pages/flight/index', { title: "flight" });
    } catch (error) {
        next(error)
    }
};