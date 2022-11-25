import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

export const Button = ({ variant, text, onClick }) => {
    const buttonClass = classnames({
        [styles.button]: true,
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
    });

    return (
        <div className={buttonClass} onClick={onClick}>
            <p>{text}</p>
        </div>
    );
};

Button.propTypes = {
    onClick: PropTypes.any,
    text: PropTypes.any,
    variant: PropTypes.string,
};
