import React from 'react';
import styles from './styles.module.scss';

export const Navbar = () => {
    return (
        <header className={styles.root}>
            <nav className={styles.container}>
                <div>
                    <img className={styles.logo} />
                </div>
            </nav>
        </header>
    );
};
