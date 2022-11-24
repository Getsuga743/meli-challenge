import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

import { Routes } from './routes';
import('styles/main.scss');

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App>
                <Routes />
            </App>
        </BrowserRouter>
    </React.StrictMode>
);
