import React from 'react';
import { GoProject } from 'react-icons/go';

const Projects = () => {
    return (
        <div id='projects' className='lg:p-10 flex flex-col'>
            <p className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary">
                <GoProject size={15} className='group-hover:text-primary'/>
                <span>Projects</span>
            </p>
        </div>
    );
};

export default Projects;