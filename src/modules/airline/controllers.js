export const index = async (req, res, next) => {
    try {
        res.edge('pages/airline/index', { title: "airline" });
    } catch (error) {
        next(error)
    }
};