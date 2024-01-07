import React from 'react';
import { useEffect } from 'react';
import {
    stafferAshley,
    stafferTwo
} from '../assets/images';
import '../assets/styles/team.css'

const Team = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                };
            });
        }, { threshold: .55 });
    
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((element) => observer.observe(element));
    },[]);

    return (
        <>
            <div className="hidden photo">
                <img
                        src={stafferAshley}
                        alt="Jeremy Ashley"
                />
                <div className="photo-text">
                    <h1>Jeremy Ashley</h1>
                    <h2>React JS Developer</h2>
                </div>
            </div>
            <div className="hidden quote-card">"Crafting digital narratives that resonate."</div>
            <div className="hidden photo">
                <img
                        src={stafferTwo}
                        alt="staffer2"
                />
                <div className="photo-text">
                    <h1>Bryce Malmberg</h1>
                    <h2>Full-stack Developer</h2>
                </div>
            </div>
            <div className="hidden quote-card">"Software development has been a lifelong passion of mine."</div>
            {/* <div className="hidden photo">
                <img
                        src={stafferThree}
                        alt="staffer3"
                />
                <div className="photo-text">
                    <h1>Robert Burski</h1>
                    <h2>Scrum Master</h2>
                </div>
            </div>
            <div className="hidden quote-card">"Bridging code and strategy with a lifetime of project management finesse and Agile expertise."</div>
            <div className="hidden photo">
                <img
                        src={stafferFour}
                        alt="staffer4"
                />
                <div className="photo-text">
                    <h1>Bailey Read</h1>
                    <h2>Front-end Developer II</h2>
                </div>
            </div>
            <div className="hidden quote-card">"Software superheroine on a mission to redefine tech boundaries."</div>
            <div className="hidden photo">
                <img
                        src={stafferFive}
                        alt="staffer5"
                />
                <div className="photo-text">
                    <h1>Alex Trevino</h1>
                    <h2>Back-end Engineer I</h2>
                </div>
            </div>
            <div className="hidden quote-card">"Building bridges between imagination and implementation through tech wizardry."</div>
            <div className="hidden photo">
                <img
                        src={stafferSix}
                        alt="staffer6"
                />
                <div className="photo-text">
                    <h1>Rich Reynolds</h1>
                    <h2>Back-end Engineer II</h2>
                </div>
            </div>
            <div className="hidden quote-card">"Veteran in back-end engineering; sculpting databases and orchestrating APIs for scalable solutions."</div> */}
        </>
    )
}

export default Team;