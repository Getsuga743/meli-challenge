/* eslint-disable no-unused-vars */
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
            data: error.message,
            status: 'fail',
            stack: error.stack,
        });
    }
    response.json({
        data: error.message,
        status: 'fail',
    });
}

function invalidPathHandler(request, response, next) {
    const error = new Error('Invalid path');
    response.status(404);
    response.send({ status: 'fail', data: error.message });
}

module.exports = {
    errorLogger,
    errorResponder,
    invalidPathHandler,
};
