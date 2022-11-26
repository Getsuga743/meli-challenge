/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export const Image = ({ src, size = 'medium', variant, alt }) => {
    const imageClass = classNames({
        [styles.image]: true,
        [styles.imageSmall]: size === 'small',
        [styles.imageMedium]: size === 'medium',
        [styles.imageLarge]: size === 'large',
        [styles.imageFluid]: size === 'fluid',
        [styles.imageRounded]: variant === 'round',
        [styles.variantProfile]: variant === 'profile',
        [styles.variantProduct]: variant === 'product',
    });

    return <img src={src} alt={alt} className={imageClass} />;
};

Image.propTypes = {
    alt: PropTypes.string,
    rounded: PropTypes.bool,
    src: PropTypes.string,
    size: PropTypes.string,
};
