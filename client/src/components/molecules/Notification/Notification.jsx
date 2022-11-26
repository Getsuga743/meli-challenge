import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

export const Notification = ({
    notification = {
        type: 'warning',
        message: 'This is a warning message',
    },
}) => {
    const notificationClass = classNames({
        [styles.notification]: true,
        // se agregarian estilos particulares para cada tipo de notificacion
        [styles.warning]: notification.type === 'warning',
    });

    return <div className={notificationClass}>{notification.message}</div>;
};

Notification.propTypes = {
    notification: PropTypes.shape({
        message: PropTypes.string,
        type: PropTypes.string,
    }),
};
