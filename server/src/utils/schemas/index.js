const Joi = require('joi');

const userId = Joi.string().pattern(/^[0-9]+$/, 'numbers');

const paymentId = Joi.string().pattern(/^[a-zA-Z]+$/, 'numbers');

const purchaseId = Joi.string().pattern(/^[0-9]+$/, 'numbers');

const shipmentId = Joi.string().pattern(/^[0-9]+$/, 'numbers');

const levelId = Joi.string().pattern(/^[a-zA-Z]+$/, 'letters');

const offset = Joi.number();
const limit = Joi.number();

const querySchema = {
    offset,
    limit,
};

module.exports = {
    userId,
    purchaseId,
    levelId,
    paymentId,
    shipmentId,
    querySchema,
};
