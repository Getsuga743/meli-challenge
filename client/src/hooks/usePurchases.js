import { useState, useEffect, createContext, useContext } from 'react';
import { getUserPurchases } from 'services/user';

const userContext = createContext();

export const useUser = () => {
    return useContext(userContext);
};

const useGetPurchases = (userId, limitParam = 5, offsetParam = 0) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [purchases, setPurchases] = useState(null);
    const [offset, setOffset] = useState(offsetParam);
    const [limit, setLimit] = useState(limitParam);

    useEffect(() => {
        if (userId) {
            const getPurchases = async () => {
                try {
                    const response = await getUserPurchases(
                        userId,
                        offset,
                        limit
                    );
                    const purchaseList = response.data;

                    if (purchases) {
                        setPurchases((prevState) => ({
                            ...prevState,
                            data: prevState.data.concat(purchaseList),
                        }));
                    } else {
                        setPurchases(response);
                    }
                    setLoading(false);
                } catch (err) {
                    setError(true);
                    setLoading(false);
                }
            };
            getPurchases();
        }
    }, [userId, offset, limit]);

    const nextOffset = offset + 1 + limit;

    const loadMore = () => {
        if (nextOffset < purchases.total) {
            setOffset(nextOffset);
        }
    };

    const reset = () => {
        setOffset(0);
        setPurchases(null);
    };

    const hasMore = () => {
        if (purchases) {
            return purchases.total > purchases.data.length;
        }
        return false;
    };

    return {
        loading,
        error,
        purchases,
        loadMore,
        reset,
        hasMore,
    };
};

export const usePurchases = (userId, limit, offset) => {
    const { loading, error, purchases, loadMore, reset, hasMore } =
        useGetPurchases(userId, limit, offset);

    return { loading, error, purchases, loadMore, reset, hasMore };
};
