import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

export const Card = ({ children, className }) => {
    const cardClass = classNames(className, {
        [styles.card]: true,
    });
    return <div className={cardClass}>{children}</div>;
};

Card.propTypes = {
    children: PropTypes.any,
    className: PropTypes.any,
};
