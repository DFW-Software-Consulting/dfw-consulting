// imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { default as Home } from './Home';
import { default as About } from './About';
import { default as Contact } from './Contact';
import { Header, Footer } from '../components';

// components
const App = () => {
   
    return (
        <div id="wrapper">
            <Header />
            <Routes>
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
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
            <Footer />
        </div>
    )
}

// exports
export default App;