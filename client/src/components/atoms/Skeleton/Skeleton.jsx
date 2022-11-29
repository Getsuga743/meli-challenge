import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const Skeleton = ({ size, className }) => {
    const skeletonClass = classNames(className, {
        [styles.skeleton]: true,
        [styles.skeletonText]: size === 'text',
        [styles.skeletonSmall]: size === 'small',
        [styles.skeletonMedium]: size === 'medium',
        [styles.skeletonLarge]: size === 'large',
        [styles.skeletonAvatar]: size === 'avatar',
    });
    return <div className={skeletonClass} />;
};

Skeleton.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
};
