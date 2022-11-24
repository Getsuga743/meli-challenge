import React, { Suspense } from 'react';
import styles from './styles.module.scss';
import { Navbar, Footer } from '../../Layout';

export const Layout = ({ children, seo }) => {
    return (
        <>
            <Navbar />
            <Suspense
                fallback={
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)',
                            minHeight: 'calc(100vh - 6rem)',
                        }}
                    >
                        <h1>Loading ...</h1>
                    </div>
                }
            >
                <main className={styles.root}>
                    <div className={styles.container}>{children}</div>
                </main>
            </Suspense>
            <Footer />
        </>
    );
};
