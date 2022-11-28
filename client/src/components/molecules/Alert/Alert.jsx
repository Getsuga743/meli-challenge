import PropTypes from 'prop-types';
import React from 'react';
import { Text, Card } from 'components/atoms';
import styles from './styles.module.scss';
import { useGetUserRestrictions } from 'hooks/useGetUserRestrictions';
import classNames from 'classnames';

// se podría agregar clases para cara uno de los tipos de alerta
// podria ser un componente de atoms con iconos reales
const emojiDictionary = {
    success: '🎉',
    error: '😢',
    warning: '⚠️',
};

export const AlertItem = ({ alert, deleteAlert }) => {
    const { mensaje, tipo } = alert;

    const handleClick = (e) => {
        deleteAlert(alert);
        e.stopPropagation();
    };
    const alertClass = classNames({
        [styles.notification]: true,
        [styles.warning]: tipo === 'warning',
    });
    return (
        <Card className={alertClass}>
            {emojiDictionary[tipo]}
            <span type="span" size="small">
                {mensaje}
            </span>
            <button
                type="button"
                onClick={handleClick}
                className={styles.button}
            >
                x
            </button>
        </Card>
    );
};

AlertItem.propTypes = {
    alert: PropTypes.shape({
        mensaje: PropTypes.string,
        tipo: PropTypes.string,
    }),
    handleDelete: PropTypes.func,
};

export const Alert = ({ userId }) => {
    const { restrictions, setUserRestrictions } =
        useGetUserRestrictions(userId);
    const deleteAlert = (restriction) => {
        setUserRestrictions(
            restrictions.filter((r) => r.mensaje !== restriction.mensaje)
        );
    };

    return (
        <div className={styles.container}>
            {restrictions?.length > 0 && (
                <AlertItem
                    key={restrictions[0].mensaje}
                    alert={restrictions[0]}
                    deleteAlert={deleteAlert}
                />
            )}
        </div>
    );
};

Alert.propTypes = {
    userId: PropTypes.number,
};
