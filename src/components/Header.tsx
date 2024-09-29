// imports
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/header.css';
import logo from '../assets/images/dallas.png';

const Header = () => {
    // variables
    const navigate = useNavigate();

    useEffect(() => {
        const hamburger = document.getElementById('hamburger');
        const navbar = document.getElementsByClassName('navbar')[0];
        const headerWrapper = document.getElementById('header-wrapper');
        const main = document.getElementById('main');
        const footer = document.getElementById('footer');

        const toggleDisplay = () => {
            navbar.classList.toggle('active');
            main?.classList.toggle('active-menu');
            footer?.classList.toggle('active-menu');
        }

        const toggleOff = () => {
            if (navbar.classList.contains('active')) {
                main?.classList.remove('active-menu');
                footer?.classList.remove('active-menu');
                navbar.classList.remove('active');
                hamburger?.classList.remove('expanded');
                headerWrapper?.classList.remove('header-wrapper');
            };
        }

        hamburger?.addEventListener('click', () => {
            if (!navbar.classList.contains('active')) {
                headerWrapper?.classList.add('header-wrapper');
                hamburger.classList.add('expanded');
            } else {
                headerWrapper?.classList.remove('header-wrapper');
                hamburger.classList.remove('expanded');
            }
            toggleDisplay();
        });

        main?.addEventListener('click', toggleOff);
        footer?.addEventListener('click', toggleOff);

        const menuItems = navbar.querySelectorAll<HTMLElement>('*');
        menuItems.forEach((menuItem) => {
            menuItem.addEventListener('click', toggleOff);
        })
    }, []);

    return (
        <>
            <div id="header">
                <div id="header-left">
                    <img
                        id="logo"
                        src={logo}
                        alt="logo"
                        onClick={() => navigate('/Home')}
                    />
                    <div id="company-info">
                        <div id="company-name">DFW SOFTWARE CONSULTING</div>
                        <div id="company-description">PROFESSIONAL SOFTWARE DEVELOPMENT SERVICES</div>
                    </div>
                    <svg id="hamburger" viewBox='0 0 100 100' width='30'>
                        <rect className="line top" width='60' height='8' x='20' y='25' rx='4' />
                        <rect className="line middle" width='60' height='8' x='20' y='45' rx='4' />
                        <rect className="line bottom" width='60' height='8' x='20' y='65' rx='4' />
                    </svg>
                </div>
                <div id="header-right">
                    <div className="navbar">
                        <div
                            id="tab-home"
                            onClick={() => navigate('/Home')}
                        >Home
                        </div>
                        <div
                            id="tab-about"
                            onClick={() => navigate('/About')}
                        >About
                        </div>
                        <div
                            id="tab-team"
                            onClick={() => navigate('/Team')}
                        >Team
                        </div>
                        <div
                            id="tab-templates"
                            onClick={() => navigate('/Templates')}
                        >Templates
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
