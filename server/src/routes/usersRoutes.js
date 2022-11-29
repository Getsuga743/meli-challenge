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
        validationHandler({ userId: schemas.userId }, 'params'),
        validationHandler(schemas.querySchema, 'query'),
        userController.getUserPurchases
    );

    router.get(
        '/:userId/purchases/:offsetId',
        validationHandler(
            { userId: schemas.userId, offsetId: schemas.offsetId },
            'params'
        ),
        userController.getUserPurchaseByOffset
    );

    router.get(
        '/:userId/restrictions',
        validationHandler({ userId: schemas.userId }, 'params'),
        userController.getUserRestrictions
    );
}

module.exports = userRoutes;
