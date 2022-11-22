const MercadoLibreService = require('../services/MercadolibreService/MercadolibreService');

const mercadoLibreService = new MercadoLibreService();

async function getUser(req, res, next) {
    try {
        const user = await mercadoLibreService.getUser();
        res.send(user);
    } catch (err) {
        next(err);
    }
}

async function getUserPurchases(req, res, next) {
    try {
        const { userId } = req.params;
        const { limit, offset } = req.query;
        const purchases = await mercadoLibreService.getUserPurchases(
            userId,
            limit,
            offset
        );
        res.send(purchases);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getUser,
    getUserPurchases,
};
