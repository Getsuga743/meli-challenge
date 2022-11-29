import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
import { Text } from 'components/atoms';
import classNames from 'classnames';
import { Button } from 'components/atoms';

export const Pagination = ({
    loadNextPage,
    canLoadMore,
    loadPreviousPage,
    page,
    loading,
}) => {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <li className={classNames(styles.item, styles.sideButton)}>
                    <Button
                        variant="outlined"
                        onClick={loadPreviousPage}
                        disabled={page === 1}
                    >
                        <Text variant="primary" color="dark" type="span">
                            Anterior
                        </Text>
                    </Button>
                </li>
                <li className={classNames(styles.item, 'mx-2')}>
                    <Text variant="primary" color="dark" type="span">
                        {page}
                    </Text>
                </li>
                <li className={classNames(styles.item, styles.sideButton)}>
                    <Button
                        variant="outlined"
                        link=""
                        onClick={loadNextPage}
                        disabled={!canLoadMore || loading}
                    >
                        <Text color="dark" type="span">
                            Siguiente
                        </Text>
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    canLoadMore: PropTypes.bool,
    loadNextPage: PropTypes.func,
    loadPreviousPage: PropTypes.func,
    loading: PropTypes.bool,
    page: PropTypes.number,
};

export default Pagination;
