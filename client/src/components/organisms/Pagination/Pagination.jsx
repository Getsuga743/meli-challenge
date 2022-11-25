import React from 'react';
import styles from './styles.module.scss';
import { Text } from 'components/atoms';
import classNames from 'classnames';
import { Button } from '../../atoms';

export const Pagination = (props) => {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <li className={classNames(styles.item, styles.backButton)}>
                    <Button variant="outlined">
                        <Text variant="primary" color="dark">
                            &lt; Anterior
                        </Text>
                    </Button>
                </li>
                <li className={classNames(styles.item, styles.pageButton)}>
                    <Button variant="link" link="a">
                        <Text size="large" color="dark">
                            1
                        </Text>
                    </Button>
                </li>
                <li className={classNames(styles.item, styles.pageButton)}>
                    <Button variant="link" link="a">
                        <Text size="small">2</Text>
                    </Button>
                </li>
                <li className={classNames(styles.item, styles.pageButton)}>
                    <Button variant="link" link="a">
                        <Text variant="primary" size="small">
                            3
                        </Text>
                    </Button>
                </li>
                <li className={classNames(styles.item)}>
                    <Button variant="outlined" link="">
                        <Text color="dark">Siguiente &gt;</Text>
                    </Button>
                </li>
            </ul>
        </nav>
    );
};
//html '<' sy

Pagination.propTypes = {};

export default Pagination;
