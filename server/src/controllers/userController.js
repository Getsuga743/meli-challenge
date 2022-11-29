const { mercadoLibreService } = require('../services');

// Obtengo la data del user y su nivel.
// Las restricciones van a parte porque, tardan mas en responder, y se pueden mostrar luego.
// TODO: el nickname no tengo ni idea de donde sacarlo, preguntar al entrevistador.
async function getUser(req, res, next) {
    try {
        const user = await mercadoLibreService.getUser();
        const { id_usuario, nombre, apellido, nivel: nivel_id, imagen } = user;
        const level = await mercadoLibreService.getLevel(nivel_id);

        const [nivel, nivel_descripcion] = Object.values(level);

        res.json({
            id_usuario: id_usuario,
            nombre_completo: `${nombre} ${apellido}`,
            imagen: imagen,
            nivel_descripcion,
            nivel,
        });
        res.status(200);
    } catch (err) {
        next(err);
    }
}

async function getUserRestrictions(req, res, next) {
    try {
        const { userId } = req.params;

        const restrictions = await mercadoLibreService.getUserRestrictions(
            userId
        );
        res.json(restrictions);
    } catch (err) {
        next(err);
    }
}

async function getUserPurchases(req, res, next) {
    try {
        const { userId } = req.params;

        const { limit, offset } = req.query;
        const { total, data: purchases } =
            await mercadoLibreService.getUserPurchases(userId, limit, offset);

        const purchasesPreviewList = purchases.map((purchase, index) => {
            const { precio, titulo, id_compra, fecha, vendedor, cantidad } =
                purchase;
            const { nickname } = vendedor;
            const { total, moneda } = precio;

            return {
                offset: index,
                id_compra,
                titulo,
                fecha,
                precio: total,
                moneda: moneda,
                vendedor: nickname,
                cantidad,
            };
        });
        return res
            .json({ total, limit, offset, data: purchasesPreviewList })
            .status(200);
    } catch (err) {
        next(err);
    }
}

async function getUserPurchaseByOffset(req, res, next) {
    try {
        const { userId, offset } = req.params;

        const purchases = await mercadoLibreService.getUserPurchases(
            userId,
            1,
            offset
        );

        const purchase = purchases.data[0];

        const {
            vendedor,
            id_compra,
            titulo,
            cantidad,
            fecha,
            imagen,
            id_transaccion,
            id_envio,
        } = purchase;

        const { nickname } = vendedor;
        const { total, moneda } = purchase.precio;

        const estados = Promise.all([
            mercadoLibreService.getPayment(id_transaccion),
            mercadoLibreService.getShipment(id_envio),
        ]);

        const [estadoPago, estadoEnvio] = await estados;
        const { estado: estado_pago } = estadoPago;
        const { estado: estado_envio } = estadoEnvio;

        const puchaseDetail = {
            id_compra,
            titulo,
            cantidad,
            fecha,
            imagen,
            precio: total,
            moneda,
            vendedor: nickname,
            estado_pago,
            estado_envio,
        };

        return res.json(puchaseDetail).status(200);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getUser,
    getUserPurchases,
    getUserRestrictions,
    getUserPurchaseByOffset,
};
