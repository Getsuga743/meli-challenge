import PropTypes from 'prop-types';
import React from 'react';
import { Title } from 'components/atoms';

import styles from './styles.module.scss';

export const DataSection = ({ title, data }) => {
    return (
        <div className={styles.root}>
            <div className={styles.titleContainer}>
                <Title type="h1" variant={'large'}>
                    {title}
                </Title>
            </div>
            {data}
        </div>
    );
};

DataSection.propTypes = {
    data: PropTypes.element,
    title: PropTypes.string,
};
