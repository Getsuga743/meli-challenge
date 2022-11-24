import React from 'react';
import styles from './styles.module.scss';

export const Navbar = () => {
    return (
        <header>
            <nav className={styles.container}>
                <div>
                    <img className={styles.logo} />
                </div>
            </nav>
        </header>
    );
};
