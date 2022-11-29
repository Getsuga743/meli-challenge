import PropTypes from 'prop-types';
import React from 'react';
import { Layout as GeneralLayout } from 'components/organisms';
import { UserProvider } from 'hooks/useUser';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
console.log(process.env.PORT);
const App = () => {
    return (
        <BrowserRouter>
            {/* {El provider que fetchea la data del user está en el nivel mas alto,
                 supongo que es información con prioridad/ 
                 o que está disponible desde antes (login)} */}
            <GeneralLayout>
                <UserProvider>
                    <Routes />
                </UserProvider>
            </GeneralLayout>
        </BrowserRouter>
    );
};

App.propTypes = {
    children: PropTypes.element,
};

export default App;
