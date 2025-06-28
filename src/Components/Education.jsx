import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Education = () => {
    return (
        <div id='education' className='lg:p-10 flex flex-col'>
            <span className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary">
                <FaBriefcase size={15} className='group-hover:text-primary'/>Education
            </span>
        </div>
    );
};

export default Education;