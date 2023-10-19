import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { App } from './containers';
import './assets/stles/global.css';

const rootElement = document.getElementById('root');
if (rootElement) {
    let root = ReactDOM.createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};