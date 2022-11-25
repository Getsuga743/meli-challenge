import React from 'react';

import styles from './styles.module.scss';
import { ProfileCard, ProductCard } from 'components/molecules';
import { Pagination } from 'components/organisms';
import { Title } from 'components/atoms';

export const Profile = () => {
    return (
        <>
            <div className={styles.sectionProfile}>
                <ProfileCard fullName="ivan" level="oro" />
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
