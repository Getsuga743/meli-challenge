import React from 'react';
import styles from './styles.module.scss';
import { useUser } from 'hooks/useUser';
import { ProfileCard } from 'components/molecules';
import { Alert } from 'components/molecules';

export const ProfileSection = () => {
    const { user, loading: userLoading, error: userError } = useUser();
    const userId = user?.id_usuario;

    return (
        <>
            <ProfileCard user={user} loading={userLoading} error={userError} />
            <div className={styles.container}>
                <Alert userId={userId} />
            </div>
        </>
    );
};
