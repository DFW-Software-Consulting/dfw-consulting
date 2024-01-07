import React from 'react';
import { useEffect } from 'react';
import '../assets/styles/home.css';
import {
    homeImageOne,
    homeImageTwo,
    homeImageThree,
    homeImageFour
} from '../assets/images';

const Home = () => {
    useEffect(() => {
        /* function of observer is to add 'show' class to observed elements
        if the viewport intersects at least 55% of them */
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                };
            });
        }, { threshold: .55 });
    
        /* attach observer to all elements with class 'hidden' to
        watch and see if they come into view in the viewport */
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((element) => observer.observe(element));
    },[]);

    return (
        <>
            <div className="hidden content-card left-card-small row-two-transition">
                <img src={homeImageOne} alt="backend" />
            </div>
            <div className="hidden content-card right-card-big row-three-transition">Empower your business with a robust backend architecture that forms the backbone of your applications. Our experts architect scalable, secure, and high-performance backend systems, ensuring your platform operates flawlessly, handles heavy traffic, and meets evolving demands with ease.</div>
            <div className="hidden content-card left-card-big row-five-transition">Your user interface is the face of your brand. We design captivating, intuitive, and responsive frontends that captivate users and leave a lasting impression. Our designs marry aesthetic appeal with seamless usability, ensuring an engaging experience across all devices.</div>
            <div className="hidden content-card right-card-small row-four-transition">
                <img src={homeImageTwo} alt="frontend" />
            </div>
            <div className="hidden content-card left-card-small row-six-transition">
                <img src={homeImageThree} alt="cloud" />
            </div>
            <div className="hidden content-card right-card-big row-seven-transition">Unlock the power of the cloud with our tailored cloud services. We leverage the latest cloud technologies to streamline operations, enhance data security, and provide scalable infrastructures that adapt to your evolving needs, enabling you to thrive in a dynamic digital landscape.</div>
            <div className="hidden content-card left-card-big row-nine-transition">We're not just about coding; we're architects of digital innovation, weaving together the threads of back end, front end, and cloud services to craft Progressive Web Apps (PWAs) that redefine user experiences.</div>
            <div className="hidden content-card right-card-small row-eight-transition">
                <img src={homeImageFour} alt="api" />
            </div>
            <div className="hidden content-card spanner-card row-ten-transition">From conceptualization to implementation, our agile team crafts unique software solutions that elevate your brand. Join forces with us, and we'll amplify your online presence together, tailoring products at scale to fit your unique ambitions.</div>
        </>
    )
}

export default Home;