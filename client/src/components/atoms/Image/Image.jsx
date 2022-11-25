import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export const Image = ({ src, variant, alt }) => {
    const imageClass = classNames({
        [styles.image]: true,
    });

    return (
        <div className={styles.container}>
            <img src={src} alt={alt} className={imageClass} />
        </div>
    );
};

Image.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    variant: PropTypes.any,
};
