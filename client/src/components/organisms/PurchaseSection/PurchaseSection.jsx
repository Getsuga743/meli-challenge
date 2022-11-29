import React from 'react';
import styles from './styles.module.scss';
import { Pagination } from 'components/organisms';
import { Title } from 'components/atoms';
import { usePagination } from 'hooks/usePagination';
import { PurchaseList } from 'components/organisms';
import { useGetPurchases } from 'hooks/useGetPurchases';
import { useUser } from 'hooks/useUser';

export const PurchaseSection = () => {
    const LIMIT = 5;
    const OFFSET = 0;
    const { user, error: userError } = useUser();
    const userId = user?.id_usuario;

    const {
        loading,
        error: purchasesError,
        purchases,
        loadMore,
    } = useGetPurchases(userId, LIMIT, OFFSET);

    const {
        page,
        loadPreviousPage,
        loadNextPage,
        indexOfFirstItem,
        indexOfLastItem,
        canLoadMore,
    } = usePagination(1, LIMIT, loadMore, purchases?.total);

    const purchasesToDisplay = purchases?.data?.slice(
        indexOfFirstItem,
        indexOfLastItem
    );
    const error = userError || purchasesError;
    if (error) {
        return <div>Hubo un error al cargar tus compras.</div>;
    }

    return (
        <div className={styles.sectionProducts}>
            <div className={styles.sectionHeader}>
                <Title>Mis compras</Title>
            </div>
            <PurchaseList
                limit={LIMIT}
                purchases={purchasesToDisplay}
                loading={loading}
                error={error}
            />
            <div className={styles.paginationContainer}>
                <Pagination
                    loadNextPage={loadNextPage}
                    canLoadMore={canLoadMore}
                    loadPreviousPage={loadPreviousPage}
                    loading={loading}
                    page={page}
                />
            </div>
        </div>
    );
};
