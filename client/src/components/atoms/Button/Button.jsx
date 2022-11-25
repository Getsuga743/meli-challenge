import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export const Button = ({
    className,
    variant = 'primary',
    link = null,
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
            [styles.button]: true,
            [styles.primary]: variant === 'primary',
            [styles.secondary]: variant === 'secondary',
            [styles.link]: variant === 'link',
            [styles.outlined] : variant === 'outlined',
        });
    }

    if (link) {
        return (
            <Link href={link} className={buttonClass} {...props}>
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
    link: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.string,
    className: PropTypes.string,
};
