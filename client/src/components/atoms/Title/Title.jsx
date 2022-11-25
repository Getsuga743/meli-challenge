import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Title = ({ children, size = 'medium', type = 'h2', color = 'primary' }) => {
    const titleClass = classNames({
        [styles.common]: true,
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.sizeLarge]: size === 'large',
        [styles.sizeMedium]: size === 'medium',
    });

    if (type === 'h1') {
        return <h1 className={titleClass}>{children}</h1>;
    }

    if (type === 'h2') {
        return <h2 className={titleClass}>{children}</h2>;
    }

    if (type === 'h3') {
        return <h3 className={titleClass}>{children}</h3>;
    }
};
