const config = require('../../../config');

function errorLogger(error, request, response, next) {
    // eslint-disable-next-line no-console
    //console.log(error);
    next(error);
}

function errorResponder(error, request, response, next) {
    response.header('Content-Type', 'application/json');
    const status = error.status || 400;
    response.status(status);

    if (config.dev) {
        response.json({
            message: error.message,
            stack: error.stack,
        });
    }
    response.json({ message: error.message });
}
function invalidPathHandler(request, response) {
    const error = new Error('Invalid path');
    response.status(404);
    response.json({
        message: error.message,
    });
}

module.exports = {
    errorLogger,
    errorResponder,
    invalidPathHandler,
};
