import React from 'react';
import { TbIcons } from 'react-icons/tb';

const Skills = () => {
    return (
        <div id='skills' className='lg:p-10 flex flex-col'>
            <p className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary">
                <TbIcons size={15} className='group-hover:text-primary'/>
                <span>Skills</span>
            </p>
        </div>
    );
};

export default Skills;