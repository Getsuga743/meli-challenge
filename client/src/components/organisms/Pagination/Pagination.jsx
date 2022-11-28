import React from 'react';
import styles from './styles.module.scss';
import { Text } from 'components/atoms';
import classNames from 'classnames';
import { Button } from '../../atoms';

export const Pagination = ({
    loadNextPage,
    hasMore,
    loadPreviousPage,
    page,
}) => {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <li className={classNames(styles.item, styles.sideButton)}>
                    <Button variant="outlined" onClick={loadPreviousPage}>
                        <Text variant="primary" color="dark">
                            Anterior
                        </Text>
                    </Button>
                </li>
                <li className={classNames(styles.item, styles.sideButton)}>
                    <Button variant="outlined" link="" onClick={loadNextPage}>
                        <Text color="dark">Siguiente</Text>
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {};

export default Pagination;
