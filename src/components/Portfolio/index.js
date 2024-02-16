import Sidebar from '../Sidebar';
import './index.scss'
import React from 'react';
import Project_Info from './Projects/Data';
import CreateCard from './Projects/CreateCard';


const Portfolio = () => {
    return ( 
        <body class="portfolio-body">
            <Sidebar/>
            <section class="portfolio">
                <h1 class="p-title">Things I've Built...</h1>
                <a class="p-sticky" href="mosessaah@oru.edu"> mosessaah@oru.edu...</a>
                <div class="p-section">
                    {Project_Info.map(CreateCard)}
                </div>
                <h1 class="other-projects">Other Projects</h1>
                <h2 class="other-list">
                    <a href=""> A list of things things i've worked on </a>
                </h2>
            </section>
        </body>
    );
}

export default Portfolio;