import React from 'react';
import { ProductDetail } from 'components/molecules';

import styles from './styles.module.scss';
import { Text } from 'components/atoms/';

export const PurchaseDetail = () => {
    return (
        <>
            <div className={styles.header}>
                <Text>Mi perfil</Text>
                <Text className="px-2">{'>'}</Text>
                <Text>Detalle de la compra</Text>
            </div>
            <ProductDetail />
        </>
    );
};
