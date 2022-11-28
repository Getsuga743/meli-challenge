import React from 'react';
import styles from './styles.module.scss';
import { PurchaseCard } from 'components/molecules';
import { Pagination } from 'components/organisms';
import { Title } from 'components/atoms';
import { useUser } from 'hooks/useUser';
import { usePurchases } from 'hooks/usePurchases';
import { usePagination } from 'hooks/usePagination';

export const PurchaseSection = () => {
    const { user } = useUser();
    const userId = user?.id_usuario;

    const { loading, error, purchases, loadMore, hasMore } = usePurchases(
        userId,
        3,
        0
    );

    const { page, pageSize, loadPreviousPage, loadNextPage } = usePagination(
        1,
        3,
        loadMore,
        hasMore
    );
    const indexOfLastPost = page * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;
    const purchasesToDisplay = purchases?.data?.slice(
        indexOfFirstPost,
        indexOfLastPost
    );

    return (
        <div className={styles.sectionProducts}>
            <div className={styles.sectionHeader}>
                <Title>Mis compras</Title>
            </div>
            {!loading &&
                !error &&
                purchasesToDisplay.map((purchase) => (
                    <PurchaseCard
                        key={purchase.id_compra}
                        purchase={purchase}
                    />
                ))}
            <div className={styles.paginationContainer}>
                <Pagination
                    loadNextPage={loadNextPage}
                    hasMore={hasMore}
                    loadPreviousPage={loadPreviousPage}
                />
            </div>
        </div>
    );
};
