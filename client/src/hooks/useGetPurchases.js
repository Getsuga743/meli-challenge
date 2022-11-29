import { useState, useEffect } from 'react';
import { getUserPurchases } from 'services/user';
import { formatDate, formatPrice } from '../utils/helpers';

export const useGetPurchases = (userId, limitParam = 5, offsetParam = 0) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [purchases, setPurchases] = useState(null);
    const [offset, setOffset] = useState(offsetParam);

    useEffect(() => {
        if (userId) {
            const getPurchases = async () => {
                setLoading(true);
                try {
                    const response = await getUserPurchases(
                        userId,
                        offset,
                        limitParam
                    );
                    const purchaseList = response.data.map((purchase) => {
                        const { fecha, precio, moneda } = purchase;

                        const formatedPrice = formatPrice(precio, 'es-AR', {
                            style: 'currency',
                            currency: moneda,
                        });

                        const formatedDate = formatDate(
                            new Date(fecha),
                            'es-AR',
                            {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            }
                        );

                        return {
                            ...purchase,
                            fecha: formatedDate,
                            precio: formatedPrice,
                        };
                    });

                    setPurchases((prevState) => ({
                        ...prevState,
                        ...response,
                        data: prevState?.data
                            ? prevState.data.concat(purchaseList)
                            : purchaseList,
                    }));
                } catch (err) {
                    setError(true);
                } finally {
                    setLoading(false);
                }
            };
            getPurchases();
        }
    }, [userId, offset, limitParam]);

    const nextOffset = offset + limitParam;

    const loadMore = () => {
        if (purchases?.total > nextOffset) {
            setOffset(nextOffset);
        }
    };

    const hasMore = () => {
        return purchases?.total > nextOffset;
    };

    return {
        loading,
        error,
        purchases,
        loadMore,
        hasMore,
    };
};
