import React from 'react';
import styles from './styles.module.scss';
import { Text } from 'components/atoms';
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Text color="dark">Meli challenge - Ivan Maier Gallardo</Text>
            </div>
        </footer>
    );
};
