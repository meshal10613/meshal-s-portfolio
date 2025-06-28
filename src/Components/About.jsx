import React from 'react';
import { LuUserRound } from 'react-icons/lu';

const About = () => {
    return (
        <section id='about' className='p-5 lg:p-10 flex flex-col'>
            <span data-aos="fade-up" data-aos-easing="ease" duration="5000" className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary w-fit px-5">
                <LuUserRound size={15} className='group-hover:text-primary'/>
                <span>About</span>
            </span>
        </section>
    );
};

export default About;