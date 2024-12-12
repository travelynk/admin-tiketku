export const index = async (req, res, next) => {
    try {
        res.edge('pages/city/index', { title: "city and country" });
    } catch (error) {
        next(error)
    }
};