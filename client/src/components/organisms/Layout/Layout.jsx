import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import styles from './styles.module.scss';
import { Navbar, Footer } from 'components/organisms';

export const Layout = ({ children }) => {
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
                    <div className={styles.content}>{children}</div>
                </main>
            </Suspense>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.element,
};
