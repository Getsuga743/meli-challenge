import PropTypes from 'prop-types';
import React from 'react';
import { PurchaseCard, PurchaseCardSkeleton } from 'components/molecules';
export const PurchaseListSkeleton = ({ limit }) => {
    return (
        <>
            {Array.from({ length: limit }, (_, i) => (
                <PurchaseCardSkeleton key={i} />
            ))}
        </>
    );
};

PurchaseListSkeleton.propTypes = {
    limit: PropTypes.number,
};

export const PurchaseList = ({ purchases, loading, limit }) => {
    if (loading) {
        return <PurchaseListSkeleton limit={limit} />;
    }

    return (
        <>
            {purchases?.map((purchase) => (
                <PurchaseCard
                    key={purchase.id_compra}
                    purchase={purchase}
                    loading={loading && purchases.length === 0}
                />
            ))}
        </>
    );
};

PurchaseList.propTypes = {
    limit: PropTypes.number,
    loading: PropTypes.bool,
    purchases: PropTypes.array,
};
