import React from 'react';
import { PurchaseDetailSection } from 'components/organisms';
import { useUser } from 'hooks/useUser';
import { useGetPurchaseDetail } from 'hooks/useGetPurchaseDetail';
import styles from './styles.module.scss';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from 'components/atoms';

export const PurchaseDetail = () => {
    const { purchaseId } = useParams();
    const { user } = useUser();
    const userId = user?.id_usuario;
    // la variable purchaseId es la que viene de la url, el paginado arranca desde el offset 0
    const offset = purchaseId - 1;

    const { purchaseDetail, loading, error } = useGetPurchaseDetail(
        userId,
        offset
    );
    return (
        <>
            <div className={styles.header}>
                <Breadcrumb
                    path={[
                        {
                            name: 'Perfil',
                            link: '/profile',
                        },
                        {
                            name: 'Compras',
                        },
                    ]}
                />
            </div>
            <PurchaseDetailSection
                isLoading={loading}
                error={error}
                purchaseDetail={purchaseDetail}
            />
        </>
    );
};
