import React from 'react';

import styles from './styles.module.scss';
import { ProfileCard, ProductCard } from 'components/molecules';
import { Pagination } from 'components/organisms';
import { Title } from 'components/atoms';
import { useUser } from 'hooks/useUser';

export const Profile = () => {
    const { user, loading, error } = useUser();

    return (
        <>
            <div className={styles.sectionProfile}>
                <ProfileCard user={user} isLoading={loading} isError={error} />
            </div>
            <div className={styles.sectionProducts}>
                <div className={styles.sectionHeader}>
                    <Title>Mis compras</Title>
                </div>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <div className={styles.paginationContainer}>
                    <Pagination />
                </div>
            </div>
        </>
    );
};
