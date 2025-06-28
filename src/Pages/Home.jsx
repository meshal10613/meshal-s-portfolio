import React from 'react';
import Introduce from '../Components/Introduce';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <div className='flex flex-col items-start lg:px-10'>
            <Introduce/>
            <About/>
            <Skills/>
            <Education/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;