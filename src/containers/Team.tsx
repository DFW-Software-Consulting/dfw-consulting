import React from 'react';
import { useEffect } from 'react';
import {
    stafferOne,
    stafferTwo,
    stafferThree,
    stafferFour,
    stafferFive,
    stafferSix
} from '../assets/images';
import '../assets/styles/team.css'

const Team = () => {

    useEffect(() => {
        function addAnimation() {
            const scrollerWrappers: NodeListOf<Element> = document.querySelectorAll(".scroller-wrapper");
            
            scrollerWrappers.forEach((scrollerWrapper) => {
                const scroller: HTMLElement | null = scrollerWrapper.querySelector(".scroller");
            
                if (scroller) {
                    const scrollerContent = Array.from(scroller.children);
                    
                    scrollerContent.forEach((item) => {
                        const duplicatedItem = item.cloneNode(true);
                        
                        if (scroller instanceof HTMLElement) {
                            const duplicatedElement = duplicatedItem as Element;
                            scroller.appendChild(duplicatedElement);
                        }
                    });
                }
            });
        };
        /* IIFE not used to avoid progressively duplicated elements
        and inadvertently faster scrolling */
        addAnimation();
    },[])

    return (
        <>
            <div className="page-title">
                <div className="page-title-inner">dfw.team</div>
            </div>
            <div className="scroller-wrapper">
                <div className="left scroller">
                    <div className="skill-card">Bootstrap</div>
                    <div className="skill-card">CSS3</div>
                    <div className="skill-card">Express</div>
                    <div className="skill-card">HTML5</div>
                    <div className="skill-card">Java</div>
                    <div className="skill-card">JavaScript</div>
                    <div className="skill-card">Next.js</div>
                    <div className="skill-card">Node</div>
                    <div className="skill-card">PostgreSQL</div>
                    <div className="skill-card">Python</div>
                    <div className="skill-card">React</div>
                    <div className="skill-card">Redux</div>
                    <div className="skill-card">REST API</div>
                    <div className="skill-card">Tailwind</div>
                    <div className="skill-card">TypeScript</div>
                    <div className="skill-card">Web API</div>
                    <div className="skill-card">Webpack</div>
                    <div className="skill-card">YAML</div>
                </div>
            </div>
            <div className="scroller-wrapper">
                <div className="right scroller">
                    <img
                            className="photo"
                            src={stafferOne}
                            alt="staffer1"
                    />
                    <img
                            className="photo"
                            src={stafferTwo}
                            alt="staffer2"
                    />
                    <img
                            className="photo"
                            src={stafferThree}
                            alt="staffer3"
                    />
                    <img
                            className="photo"
                            src={stafferFour}
                            alt="staffer4"
                    />
                    <img
                            className="photo"
                            src={stafferFive}
                            alt="staffer5"
                    />
                    <img
                            className="photo"
                            src={stafferSix}
                            alt="staffer6"
                    />
                </div>
            </div>
        </>
    )
}

export default Team;

/*
    include in this page photos of teammembers, both real
    and fake, and include a description below two scrollers
    of the team, including 22 years of experience

    - get the photos from myself, owner, and website for
    generating fake people
    - have chatgpt generate the description of the team.
    include: 22 years experience, front-end, back-end,
    past companies worked for, tireless, diligent,
    team of professionals, generate some more buzz words
*/