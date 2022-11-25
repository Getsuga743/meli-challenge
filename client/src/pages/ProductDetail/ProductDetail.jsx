import React from 'react';
import { Card } from 'components/atoms';
 

export const ProductDetail = () => {
    return (
        <div>
            <div>
                 Mi Perfil
            </div>
            <Card>
                <div>Detalle Product</div>
            </Card>
            <Card>
                <div>Estado del pago</div>
            </Card>
            <Card>
                <div>Estado del envío</div>
            </Card>
        </div>
    );
};



