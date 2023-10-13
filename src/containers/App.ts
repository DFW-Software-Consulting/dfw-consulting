/*
import header from ../components
import footer from ../components
import home from ./
import about from ./
import staff from ./

const App = () => {

    return (
        <>
        </>
    )
}

export default app
*/

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { default as Home } from './Home';
import '../assets/styles/global.css';

const App = () => {
    return (
        <div id="wrapper">
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                >
            </Routes>
        </div>
    )
}

export default App;