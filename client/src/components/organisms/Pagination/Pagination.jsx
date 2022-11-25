import React from 'react';
import styles from './styles.module.scss';
import { Text } from 'components/atoms';
import classNames from 'classnames';
import { Button } from '../../atoms';

export const Pagination = (props) => {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <li className={classNames(styles.item, styles.sideButton)}>
                    <Button variant="outlined">
                        <Text variant="primary" color="dark">
                             Anterior
                        </Text>
                    </Button>
                </li>
                <li className={classNames(styles.item, styles.pageButton)}>
                    <Button variant="link" link="" size="medium">
                        <Text color="dark">
                            1
                        </Text>
                    </Button>
                </li>
                <li className={classNames(styles.item, styles.pageButton)}>
                    <Button variant="link" link="a" size="medium">
                        2
                    </Button>
                </li>
                <li className={classNames(styles.item, styles.pageButton)}>
                    <Button variant="link" link="a" size="medium">
                        3
                    </Button>
                </li>
                <li className={classNames(styles.item, styles.sideButton)}>
                    <Button variant="outlined" link="">
                        <Text color="dark">Siguiente</Text>
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {};

export default Pagination;
