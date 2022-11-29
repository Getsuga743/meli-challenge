import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'components/atoms';

import styles from './styles.module.scss';

const statusDictionary = {
    realizada: 'success',
    rechazada: 'failure',
    cancelada: 'failure',
    entregado: 'success',
    cancelado: 'failure',
};

export const Badge = ({ status }) => {
    const statusColor = statusDictionary[status];

    return (
        <div className={`${styles.badge} ${styles[statusColor]}`}>
            <Text color="light" weight="bold" type="span">
                {status}
            </Text>
        </div>
    );
};

Badge.propTypes = {
    status: PropTypes.oneOf([
        'realizada',
        'rechazada',
        'cancelada',
        'entregado',
        'cancelado',
    ]).isRequired,
};
