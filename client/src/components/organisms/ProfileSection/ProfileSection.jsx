import React from 'react';
import styles from './styles.module.scss';
import { useUser } from 'hooks/useUser';
import { ProfileCard } from 'components/molecules';
import { Alert } from 'components/molecules';

export const ProfileSection = () => {
    const { user, loading: userLoading, error: userError } = useUser();
    
    return (
        <>
            <ProfileCard
                user={user}
                isLoading={userLoading}
                isError={userError}
            />
            <Alert user={user} />
        </>
    );
};
