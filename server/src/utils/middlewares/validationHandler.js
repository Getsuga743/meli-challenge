const joi = require('joi');

function validate(data, schema) {
    const joiSchema = joi.object(schema);
    const { error } = joiSchema.validate(data);
    if (error) throw new Error(error.message);
}

function validationHandler(schema, check = 'body') {
    return async function (req, res, next) {
        try {
            validate(req[check], schema);
            next();
        } catch (error) {
            next(error);
        }
    };
}

module.exports = validationHandler;
