export const handleNotFound = (req, res) => {
    const code = 404;
    const message = "Page Not Found";
    res.edge('pages/error/index', { code, message });
};

export const handleOther = (err, req, res, next) => {
    if (!err) {
        return next(); 
    }

    if(process.env.NODE_ENV === 'development') {
        console.log(err);
    }

    const statusCode = err.statusCode || 500;
    res.statusCode = statusCode;
    const code = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.edge('pages/error/index', { code, message });
};