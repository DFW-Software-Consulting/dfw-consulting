// imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { default as Home } from './Home';
import { default as About } from './About';
import { default as Team } from './Team';
import { Header, Footer } from '../components';

// components
const App = () => {
   
    return (
        <>
         <div id="wrapper">
            <div id="header-wrapper">
                <Header />
            </div>
            <div id="main">
                <Routes>
                    <Route
                        path="/about"
                        element={<About />}
                    />
                    <Route
                        path="/team"
                        element={<Team />}
                    />
                    <Route
                        path="/home"
                        element={<Home />}
                    />
                    <Route
                        path="/"
                        element={<Home />}
                    />
                </Routes>
            </div>
            <div id="footer-wrapper">
                <Footer />
            </div>
        </div>
        </>
    )
}

// exports
export default App;