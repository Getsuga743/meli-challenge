import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

export const Title = ({
    children,
    size = 'medium',
    type = 'h3',
    color = 'dark',
    className,
}) => {

    if (!children) {
        return null;
    }


    const titleClass = classnames(className, {
        [styles.common]: true,
        [styles.black]: color === 'black',
        [styles.dark]: color === 'dark',
        [styles.medium]: color === 'medium',
        [styles.light]: color === 'light',
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

    if (type === 'h4') {
        return <h4 className={titleClass}>{children}</h4>;
    }
};

Title.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
};
