import React from 'react';
import { TbIcons } from 'react-icons/tb';
import ReactImage from '../assets/skills/react.png';
import JavaScript from '../assets/skills/javascript.webp';
import Express from '../assets/skills/express.jpg';
import MongoDB from '../assets/skills/mongodbl.png';
import Firebase from '../assets/skills/firebase.webp';

const Skills = () => {
    return (
        <div id='skills' className='lg:p-10 flex flex-col'>
            <span className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary w-fit">
                <TbIcons size={15} className='group-hover:text-primary'/>
                <span>My Skills</span>
            </span>

            <section className=" text-white p-6 md:p-12">
                <div className="max-w-4xl mx-auto">
                
                    <div className="flex flex-wrap gap-4">
                        {/* <img src='' alt="" /> */}
                        <h2>React</h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;