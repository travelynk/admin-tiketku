export const index = async (req, res, next) => {
    try {
        res.edge('pages/user/index', { title: "user" });
    } catch (error) {
        next(error)
    }
};