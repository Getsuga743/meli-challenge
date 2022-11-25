import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const Text = ({ children, size, color = 'dark', type = 'p' }) => {
    const textClass = classNames({
        [styles.common]: true,
        [styles.dark]: color === 'dark',
        [styles.medium]: color === 'medium',
        [styles.light]: color === 'light',
        [styles.sizeLarge]: size === 'large',
        [styles.sizeMedium]: size === 'medium',
        [styles.sizeSmall]: size === 'small',
    });

    if (type === 'p') {
        return <p className={textClass}>{children}</p>;
    }

    if (type === 'span') {
        return <span className={textClass}>{children}</span>;
    }
};

Text.propTypes = {
    children: PropTypes.element,
    color: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
};
