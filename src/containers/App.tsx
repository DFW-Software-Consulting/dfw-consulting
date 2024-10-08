// imports
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { default as Home } from './Home';
import { default as About } from './About';
import { default as Team } from './Team';
import { Header, Footer } from '../components';
import TemplatesList from './TemplatesList';

// components
const App = () => {
    const location = useLocation();

    return (
        <>
            <div id="wrapper">
                <div id="header-wrapper">
                    <Header />
                </div>
                {(location.pathname.toLowerCase() === '/home' || location.pathname === '/') && (
                    <div className="hero">
                        <div className="hero-title">DFW Software Consulting</div>
                        <div className="hero-quote">Within every new idea is the power to change the world</div>
                    </div>
                )}
                <div id="main">
                    <Routes>
                        <Route
                            path="/templates"
                            element={<TemplatesList />}
                        />
                        <Route
                            path="/about"
                            element={<About />}
                        />
                        <Route
                            path="/team"
                            element={<Team />}
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

export default App;
