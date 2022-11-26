import PropTypes from 'prop-types';
import React from 'react';
import { Image, Title, Text, Button } from 'components/atoms';
import styles from './styles.module.scss';
import { Card } from 'components/atoms';

// Listado de compras, con id de compra, título del ítem, precio, cantidad y fecha
// de compra, y una forma para ver el detalle de esa compra
export const ProductCard = () => {
    return (
        <Card className={styles.container}>
            <div className={styles.header}>
                <Text type="span" color="dark" weight="bold">
                    01/01/2021
                </Text>
                <Text
                    type="span"
                    size="xsmall"
                    color="medium"
                    weight="bold"
                    className="pt-2"
                >
                    #123456
                </Text>
            </div>
            <div className={styles.grid}>
                <div className={styles.imageContainer}>
                    <Image
                        src={
                            'https://http2.mlstatic.com/D_NQ_NP_969645-MLA46877067884_072021-V.webp'
                        }
                        size="fluid"
                        variant="product"
                    />
                </div>
                <div className={styles.text}>
                    <Title size="large">Producto 1</Title>
                    <Text size="small" weight="bold">
                        $ 100
                    </Text>
                    <Text size="medium">cantidad: 1</Text>
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

ProductCard.propTypes = {
    children: PropTypes.element,
};
