import React from 'react';
import { LuUserRound } from 'react-icons/lu';

const About = () => {
    return (
        <div id='about' className='lg:p-10 flex flex-col'>
            <p className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary">
                <LuUserRound size={15} className='group-hover:text-primary'/>
                <span>About</span>
            </p>
        </div>
    );
};

export default About;