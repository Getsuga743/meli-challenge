const Joi = require('joi');

const userId = Joi.string()
    .pattern(/^[0-9]+$/, 'numbers')
    .required();

const offsetId = Joi.string()
    .pattern(/^[0-9]+$/, 'numbers')
    .required();

const querySchema = {
    offset: Joi.number().min(0),
    limit: Joi.number(),
};

module.exports = {
    userId,
    querySchema,
    offsetId,
};
