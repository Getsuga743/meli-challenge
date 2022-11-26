import React from 'react';
import { Card, Text, Title, Image } from 'components/atoms';
import styles from './styles.module.scss';

export const ProductDetail = () => {
    return (
        <>
            <Card className={styles.headerCard}>
                <div>
                    <Title type="h4" size="small" color="dark">
                        Celular Samsung Galaxy A51 128gb Refabricado Liberado
                    </Title>
                    <div className={styles.headerCardDescription}>
                        <Text size="xsmall" color="dark">
                            #12313123
                        </Text>
                        <Text size="xsmall" color="dark" className="ml-2">
                            | 1 u.
                        </Text>
                        <Text size="xsmall" color="dark" className="ml-2">
                            | $ 12313
                        </Text>
                    </div>
                </div>
                <Image
                    variant="round"
                    src="https://http2.mlstatic.com/D_NQ_NP_969645-MLA46877067884_072021-V.webp"
                />
            </Card>
            <div className={styles.titleSection}>
                <Title type="h2" size="medium">
                    Detalles de la compra
                </Title>
            </div>
            <div className={styles.row}>
                <Text>Vendedor: Electrodomésticos y más</Text>
            </div>
            <div className={styles.row}>
                <Text>Estado pago:</Text>
                <Text>Realizado</Text>
            </div>
            <div className={styles.row}>
                <Text>Envio:</Text>
                <Text>cancelado</Text>
            </div>
        </>
    );
};
