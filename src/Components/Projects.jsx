import React from 'react';
import { GoProject } from 'react-icons/go';

const Projects = () => {
    return (
        <div id='projects' className='lg:p-10 flex flex-col'>
            <span data-aos="fade-up" data-aos-easing="ease" duration="5000" className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary w-fit px-5">
                <GoProject size={15} className='group-hover:text-primary'/>
                <span>Projects</span>
            </span>
        </div>
    );
};

export default Projects;