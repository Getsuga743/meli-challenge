import PropTypes from 'prop-types';
import React from 'react';
import { Title, Text, Button } from 'components/atoms';
import styles from './styles.module.scss';
import { Card } from 'components/atoms';

// Listado de compras, con id de compra, título del ítem, precio, cantidad y fecha
// de compra, y una forma para ver el detalle de esa compra
export const PurchaseCard = ({ purchase }) => {
    const { id_compra, titulo, fecha, cantidad, precio, moneda } = purchase;

    const formatedPrecio = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: moneda,
    }).format(precio);

    const formatedFecha = new Intl.DateTimeFormat('es-AR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(new Date(fecha));

    return (
        <Card className={styles.container}>
            <div className={styles.header}>
                <Title size="medium">{titulo}</Title>
                <Text
                    type="span"
                    size="xsmall"
                    color="medium"
                    weight="bold"
                    className="pt-2"
                >
                    #{id_compra}
                </Text>
            </div>
            <div className={styles.grid}>
                <div className={styles.text}>
                    <Text type="span" size="small" color="medium" weight="bold">
                        {formatedPrecio}
                    </Text>
                    <Text type="span" color="medium" className="my-2">
                        {formatedFecha}
                    </Text>
                    <Text type="span" size="small">
                        {`${cantidad} ${cantidad > 1 ? 'unidades' : 'unidad'}`}
                    </Text>
                </div>
                <div className={styles.button}>
                    <Button size="small" link="/profile/purchases/1">
                        <Text size="small" color="light">
                            Ver detalle
                        </Text>
                    </Button>
                </div>
            </div>
        </Card>
    );
};

PurchaseCard.propTypes = {
    children: PropTypes.element,
};
