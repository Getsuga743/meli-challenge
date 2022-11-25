import PropTypes from 'prop-types';
import React from 'react';
import { Layout } from './components/organisms';

const App = ({ children }) => {
    return <Layout>{children}</Layout>;
};

App.propTypes = {
    children: PropTypes.element,
};

export default App;
