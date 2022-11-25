import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

export const Title = ({
    children,
    size = 'medium',
    type = 'h2',
    color = 'primary',
    className,
}) => {
    const titleClass = classnames(className, {
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

Title.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
};
