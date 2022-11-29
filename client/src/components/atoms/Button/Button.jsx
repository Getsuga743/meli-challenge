import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export const Button = ({
    className,
    variant = 'primary',
    link = null,
    size = 'medium',
    onClick,
    children,
    ...props
}) => {
    const handleOnClick = (e) => {
        if (onClick) {
            onClick(e);
        }
    };
    let buttonClass;

    if (variant !== 'none') {
        buttonClass = classnames(className, {
            [styles.disabled]: props.disabled,
            [styles.xsmall]: size === 'xsmall',
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.full]: size === 'full',
            [styles.button]: true,
            [styles.primary]: variant === 'primary',
            [styles.link]: variant === 'link',
            [styles.outlined]: variant === 'outlined',
        });
    }

    if (link) {
        return (
            <Link to={link} className={buttonClass} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={buttonClass} onClick={handleOnClick} {...props}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    link: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
};
