import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

export const Text = ({
    className,
    children,
    size = 'small',
    color = 'medium',
    type = 'p',
    weight = 'regular',
}) => {
    if (!children) {
        return null;
    }

    const textClass = classnames(className, {
        [styles.common]: true,
        [styles.dark]: color === 'dark',
        [styles.dark]: color === 'dark',
        [styles.medium]: color === 'medium',
        [styles.light]: color === 'light',
        [styles.sizeLarge]: size === 'large',
        [styles.sizeMedium]: size === 'medium',
        [styles.sizeSmall]: size === 'small',
        [styles.sizeXSmall]: size === 'xsmall',
        [styles.bold]: weight === 'bold',
    });

    if (type === 'p') {
        return <p className={textClass}>{children}</p>;
    }

    if (type === 'span') {
        return <span className={textClass}>{children}</span>;
    }
};

Text.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    weight: PropTypes.string,
};
