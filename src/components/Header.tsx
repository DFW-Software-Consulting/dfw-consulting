// imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/header.css';
import logo from '../assets/images/dallas.png';

const Header = () => {
    // variables
    const navigate = useNavigate();

    return (
        <>
            <div id="header">
                <div id="header-left">
                    <img
                        id="logo"
                        src={logo}
                        alt="logo"
                        onClick={(e) => {
                            navigate('/Home')
                        }}
                    />
                    <div id="company-info">
                        <div id="company-name">DFW CONSULTING</div>
                        <div id="company-description">PROFESSIONAL SOFTWARE DEVELOPMENT SERVICES</div>
                    </div>
                </div>
                <div id="header-right">
                    <div
                        id="tab-home"
                        onClick={(e) => {
                            navigate('/Home')
                        }}
                        >Home
                    </div>
                    <div
                        id="tab-about"
                        onClick={(e) => {
                            navigate('/About')
                        }}
                        >About
                    </div>
                    <div
                        id="tab-team"
                        onClick={(e) => {
                            navigate('/Team')
                        }}
                        >Team
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
