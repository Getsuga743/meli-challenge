import React from 'react';
import styles from './styles.module.scss';

export const Navbar = () => {
    return (
        <header className={styles.root}>
            <nav className={styles.container}>
                <div>
                    <div className={styles.logo} />
                </div>
            </nav>
        </header>
    );
};
