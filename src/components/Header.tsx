import React from 'react';
import '../assets/styles/header.css';

const Header = () => {

    return (
        <>
            <div id="header">
                <div id="header-left">
                    <div id="logo">
                        <img src="" alt="" />
                    </div>
                    <div id="company-info">
                        <div id="company-name">DFW Consulting</div>
                        <div id="company-description">Professional Software Development Services</div>
                    </div>
                </div>
                <div id="header-right">
                    <div id="tab-home">Home</div>
                    <div id="tab-about">About</div>
                    <div id="tab-contact">Contact</div>
                </div>
            </div>
        </>
    )
}

export default Header;
