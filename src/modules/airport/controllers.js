export const index = async (req, res, next) => {
    try {
        res.edge('pages/airport/index', { title: "airport" });
    } catch (error) {
        next(error)
    }
};