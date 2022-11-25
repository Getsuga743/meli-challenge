import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import classNames from 'classnames';

export const Skeleton = ({ size }) => {
    const skeletonClass = classNames({
        [style.skeleton]: true,
        [style.skeletonSmall]: size === 'small',
        [style.skeletonMedium]: size === 'medium',
        [style.skeletonLarge]: size === 'large',
    });
    return <div className={skeletonClass} />;
};

Skeleton.propTypes = { size };
