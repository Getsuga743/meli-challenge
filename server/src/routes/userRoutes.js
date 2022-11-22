const { Router } = require('express');
const validationHandler = require('../utils/middlewares/validationHandler');
const schemas = require('../utils/schemas');
const userController = require('../controllers/userController');

function userRoutes(app) {
    const router = Router();

    app.use('/api/users', router);

    router.get('/me', userController.getUser);

    router.get(
        '/:userId/purchases',
        validationHandler(schemas.userId, 'param'),
        validationHandler(schemas.querySchema, 'query'),
        userController.getUserPurchases
    );
}

module.exports = userRoutes;
