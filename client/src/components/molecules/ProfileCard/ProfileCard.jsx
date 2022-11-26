import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
import { Image, Title, Text } from 'components/atoms';
import { Card } from 'components/atoms';
import { Skeleton } from 'components/atoms';

export const ProfileCard = ({ user, isLoading, isError }) => {
    if (isLoading) {
        return (
            <Card className={styles.container}>
                <div className={styles.imageContainer}>
                    <Skeleton size="avatar" />
                </div>
                <div className={styles.textContainer}>
                    <div>
                        <Skeleton size="small" />
                        <Skeleton size="small" className="my-2" />
                        <Skeleton size="small" />
                    </div>
                </div>
            </Card>
        );
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <>
            <Card className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src={user?.image} rounded={true} variant="profile" />
                </div>
                <div className={styles.textContainer}>
                    <div>
                        <Title type="h1" size="large">
                            {user?.full_name}
                        </Title>
                    </div>
                </div>
            </Card>
        </>
    );
};

ProfileCard.propTypes = {};
