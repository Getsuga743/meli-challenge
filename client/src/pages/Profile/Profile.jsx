import React from 'react';

import styles from './styles.module.scss';
import { ProductCard } from 'components/molecules';
import { Pagination } from 'components/organisms';
import { Title } from 'components/atoms';
import { ProfileSection } from 'components/organisms';

export const Profile = () => {

    return (
        <>
            <ProfileSection />
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
