import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
import { Text, Divider } from 'components/atoms';
import { Row } from 'components/molecules';

export const DataCard = ({ data }) => {
    return (
        <div className={styles.container}>
            {data &&
                data.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <Row>
                            <Text variant="primary">{item.left}</Text>
                            <Text variant="primary">{item.right}</Text>
                        </Row>
                        {item.length - 1 !== index && <Divider />}
                    </React.Fragment>
                ))}
        </div>
    );
};

DataCard.propTypes = {
    data: PropTypes.array,
};
