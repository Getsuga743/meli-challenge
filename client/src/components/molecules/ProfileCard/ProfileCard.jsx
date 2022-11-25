import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
import { Image, Title, Text } from 'components/atoms';

export const ProfileCard = ({ fullName, level = null }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadolibre/180x180.png"
                    rounded={true}
                    variant="profile"
                />
            </div>
            <div className={styles.textContainer}>
                <div>
                    <Title type="h1" size="large">
                        {fullName}
                    </Title>
                    <Text variant="primary">@ivanmaierg</Text>
                </div>
                <div>
                    <Text type="span" size="medium">
                        Nivel - {level}
                    </Text>
                </div>
            </div>
        </div>
    );
};

ProfileCard.propTypes = {
    fullName: PropTypes.string,
    level: PropTypes.string,
};
