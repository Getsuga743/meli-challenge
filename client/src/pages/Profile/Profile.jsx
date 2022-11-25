import React from 'react';
import { DataSection } from 'components/organisms';

import styles from './styles.module.scss';
import { DataCard } from 'components/molecules/DataCard/DataCard';
import { Title } from 'components/atoms';

export const Profile = () => {
    return (
        <div className={styles.root}>
            <div className={styles.mainTitle}>
                <Title type="h1" size="large">
                    Mi perfil
                </Title>
            </div>
            <DataSection title="Información general" data={<DataCard />} />
            <div className={styles.mainTitle}>
                <Title type="h2" size="medium">
                    Mis compras
                </Title>
            </div>
        </div>
    );
};
