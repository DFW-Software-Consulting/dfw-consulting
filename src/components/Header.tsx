// imports
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/header.css';
import logo from '../assets/images/dallas.png';

const Header = () => {
    // variables
    const navigate = useNavigate();

    useEffect(() => {
        // useEffect variables
        const hamburger = document.getElementById('hamburger');
        const navbar = document.getElementsByClassName('navbar')[0];
        const headerWrapper = document.getElementById('header-wrapper');
        const main = document.getElementById('main');
        const footer = document.getElementById('footer');
        /* to-do: manipulate class on hero image element to blur and unblur */
        // const hero = document.getElementsByClassName('hero')[0];
        
        // helper function to toggle open and closed menu
        const toggleDisplay = () => {
            /*
                here the menu is specifically being interacted with, so
                open-menu and close-menu styled classes assigned to menu
                items can be toggled on and off through normal behavior
                of menu interaction
            */
            navbar.classList.toggle('active');
            // target blur effect for content in main and footer when menu opens
            main?.classList.toggle('active-menu');
            footer?.classList.toggle('active-menu');
            /* to-do: blur hero image on menu open */
            // hero.classList.toggle('active-menu');
        }

        // helper function to close menu
        const toggleOff = () => {
            // close menu if main, footer, or hero image are clicked
            if (navbar.classList.contains('active')) {
                /*
                    explicitly remove classes instead of toggling because
                    otherwise a class that shouldn't remain on a menu item
                    might still remain when not explicitly interacting
                    with that menu item
                */
                main?.classList.remove('active-menu');
                footer?.classList.remove('active-menu');
                navbar.classList.remove('active');
                hamburger?.classList.remove('expanded');
                headerWrapper?.classList.remove('header-wrapper');
                /* to-do: unblur hero image */
                // hero.classList.remove('active-menu');
            };
        }

        hamburger?.addEventListener('click', () => {
            // toggle display of line separating header from content of body if hamburger is clicked
            if (!navbar.classList.contains('active')) {
                headerWrapper?.classList.add('header-wrapper');
                // explicitly add instead of toggle
                hamburger.classList.add('expanded');
            } else {
                headerWrapper?.classList.remove('header-wrapper');
                // explicitly remove instead of toggle
                hamburger.classList.remove('expanded');
            }
            // close and open menu when hamburger clicked
            toggleDisplay();
        });

        main?.addEventListener('click', () => {
            // close menu when main is clicked
            toggleOff();
        });

        footer?.addEventListener('click', () => {
            // close menu when footer is clicked
            toggleOff();
        });

        /* to-do: blur hero image by passing location.pathname state in useEffect */
        // hero.addEventListener('click', () => {
        //     // close menu when hero image section is clicked
        //     toggleOff();
        // });

        const menuItems = navbar.querySelectorAll<HTMLElement>('*');
        menuItems.forEach((menuItem) => {
            menuItem.addEventListener('click', () => {
                // close menu when a menu item is clicked
                toggleOff();
            })
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
                        onClick={(e) => {
                            navigate('/Home')
                        }}
                    />
                    <div id="company-info">
                        <div id="company-name">DFW CONSULTING</div>
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
            </div>
        </>
    )
}

export default Header;
