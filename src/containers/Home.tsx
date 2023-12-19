import React from 'react';
import '../assets/styles/home.css';

const Home = () => {
    return (
        <>
            <div className="page-title">
                <div className="page-title-inner">dfw.home</div>
            </div>
            <div className="left-card-small">leftCardSmall</div>
            <div className="right-card-big">rightCardBig</div>
            <div className="left-card-big">leftCardBig</div>
            <div className="right-card-small">rightCardSmall</div>
            <div className="content-card">contentCard</div>
        </>
    )
}

export default Home;

/*
    play around with the grid, adding free stock photos
    with a positive inspiring mission statement and question
    incentivizing companies to take a further look into
    the website

    - get stock photos that match the theme of text points
    - generate text for the text points that's positive and
    inspiring
    - stagger photos. placer 1 in column 1 row 1, the next
    photo in column 3, row 2, the next one in column 1, row 3,
    etc. and have the text take up 2 columns and 1 row each
    and be opposite of the themed stock photo they're describing 
*/