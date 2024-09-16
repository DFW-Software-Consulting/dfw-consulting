import React from 'react';
import '../assets/styles/footer.css'; // Link to the CSS file

const Footer: React.FC = () => {
    return (
        <footer id="footer-wrapper">
            <div id="footer">
                <p>
                    Copyright © 2023 DFW Software Consulting |
                    <a href="mailto:dfwsoftwareconsulting@gmail.com" className="footer-link">
                        Contact Us
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
