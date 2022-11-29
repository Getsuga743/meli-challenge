import { useState, useEffect } from 'react';
import { getPurchaseDetail } from 'services/user';
import { formatDate, formatPrice } from '../utils/helpers';

export const useGetPurchaseDetail = (userId, offset) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [purchaseDetail, setPurchaseDetail] = useState(null);

    useEffect(() => {
        if (userId) {
            const fetchPurchaseDetail = async () => {
                try {
                    const response = await getPurchaseDetail(userId, offset);
                    const { fecha, precio, moneda } = response;

                    const formatedPrice = formatPrice(precio, 'es-AR', {
                        style: 'currency',
                        currency: moneda,
                    });

                    const formatedDate = formatDate(new Date(fecha), 'es-AR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    });

                    setPurchaseDetail({
                        ...response,
                        fecha: formatedDate,
                        precio: formatedPrice,
                    });
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };
            fetchPurchaseDetail();
        }
    }, [userId, offset]);

    return { loading, error, purchaseDetail, setPurchaseDetail };
};
