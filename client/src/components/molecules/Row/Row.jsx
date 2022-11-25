import PropTypes from "prop-types"
import React from 'react';
import { Text } from 'components/atoms';
import styles from './styles.module.scss';

const Row = ({ children }) => {
    return (
        <div className={styles.row}>
            {children}
        </div>
    );
};

Row.propTypes = {
  children: PropTypes.element
}

export default Row;
