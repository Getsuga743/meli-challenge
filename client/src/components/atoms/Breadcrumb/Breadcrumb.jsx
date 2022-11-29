import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'components/atoms';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const Breadcrumb = ({ path }) => {
    return (
        <div className={styles.breadcrumb}>
            {path.map((item, index) => {
                return (
                    <div key={index}>
                        <Link to={item.link}>
                            <Text
                                color={
                                    index === path.length - 1
                                        ? 'dark'
                                        : 'medium'
                                }
                                size="small"
                                weight="bold"
                                className="mx-2"
                            >
                                {item.name}
                            </Text>
                        </Link>
                        {index !== path.length - 1 && (
                            <Text className={styles.breadcrumbSeparator}>
                                {'>'}
                            </Text>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

Breadcrumb.propTypes = {
    path: PropTypes.array,
};
