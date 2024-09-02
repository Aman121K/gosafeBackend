const sendResponse = (res, statusCode, message, data = null, error = null) => {
    if (error) {
        console.error(`Error: ${message}`, error);
    }
    return res.status(statusCode).json({
        status: statusCode,
        message: message,
        data: data,
    });
};

module.exports = {
    sendResponse,
};