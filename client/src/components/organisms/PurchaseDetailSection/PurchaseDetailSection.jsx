import PropTypes from 'prop-types';
import React from 'react';
import { Card, Text, Title, Image, Badge } from 'components/atoms';
import styles from './styles.module.scss';

export const PurchaseDetailSection = ({ isLoading, purchaseDetail, error }) => {
    if (isLoading) {
        return <div>Cargando</div>;
    }

    if (error) {
        return (
            <div>
                <Text>
                    Hubo un error al cargar los datos, por favor intente
                    nuevamente.
                </Text>
            </div>
        );
    }

    const {
        id_compra,
        titulo,
        cantidad,
        fecha,
        imagen,
        precio,
        vendedor,
        estado_pago,
        estado_envio,
    } = purchaseDetail;

    return (
        <>
            <Card className={styles.headerCard}>
                <div>
                    <Title type="h4" size="small" color="dark">
                        {titulo}
                    </Title>
                    <div className={styles.headerCardDescription}>
                        <Text size="xsmall" color="dark">
                            #{id_compra}
                        </Text>
                        <Text size="xsmall" color="dark" className="ml-2">
                            |
                            {cantidad > 1
                                ? ` ${cantidad} unidades`
                                : ` ${cantidad} unidades`}
                        </Text>
                        <Text size="xsmall" color="dark" className="ml-2">
                            | {precio}
                        </Text>
                        <Text size="xsmall" color="dark" className="ml-2">
                            | {fecha}
                        </Text>
                    </div>
                </div>
                <Image variant="round" src={imagen} alt={titulo} />
            </Card>
            <div className={styles.titleSection}>
                <Title type="h2" size="medium">
                    Detalles de la compra
                </Title>
            </div>
            <div className={styles.row}>
                <Text>Vendedor: </Text>
                <Text color="dark" className="ml-2">
                    {vendedor}
                </Text>
            </div>
            <div className={styles.row}>
                <Text>Estado pago:</Text>
                <Badge status={estado_pago} />
            </div>
            <div className={styles.row}>
                <Text>Envio:</Text>
                <Badge status={estado_envio} />
            </div>
        </>
    );
};

PurchaseDetailSection.propTypes = {
    error: PropTypes.bool,
    isLoading: PropTypes.bool,
    purchaseDetail: PropTypes.shape({
        cantidad: PropTypes.number,
        estado_envio: PropTypes.string,
        estado_pago: PropTypes.string,
        fecha: PropTypes.string,
        id_compra: PropTypes.number,
        imagen: PropTypes.string,
        moneda: PropTypes.string,
        precio: PropTypes.string,
        titulo: PropTypes.string,
        vendedor: PropTypes.string,
    }),
};
