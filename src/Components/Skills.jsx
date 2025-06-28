import React from 'react';
import { TbIcons } from 'react-icons/tb';
import ReactImage from '../assets/skills/react.png';
import JavaScript from '../assets/skills/javascript.png';
import Express from '../assets/skills/express.png';
import MongoDB from '../assets/skills/mongodb.png';
import Firebase from '../assets/skills/firebase.png';

const Skills = () => {
    const skillsData = [
        {
            id: 1,
            logo: JavaScript,
            title: "JavaScript"
        },
        {
            id: 2,
            logo: ReactImage,
            title: "React"
        },
        {
            id: 3,
            logo: Express,
            title: "Express"
        },
        {
            id: 4,
            logo: MongoDB,
            title: "MongoDB"
        },
        {
            id: 5,
            logo: Firebase,
            title: "Firebase"
        },
    ];

    return (
        <div id='skills' className='p-5 lg:p-10 flex flex-col'>
            <span data-aos="fade-up" data-aos-easing="ease" duration="5000" className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary w-fit px-5">
                <TbIcons size={15} className='group-hover:text-primary'/>
                <span>My Skills</span>
            </span>

            <h2 data-aos="fade-up" data-aos-easing="ease" duration="5000" className='text-4xl md:text-5xl mb-10'>My <span className='text-primary'>Advantages</span></h2>

            <section className=" text-white p-6 md:p-12">
                <div data-aos="fade-up" data-aos-easing="ease" duration="5000" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
                    {
                        skillsData.map(skill => 
                            <div key={skill.id} className="flex flex-col justify-center items-center gap-3 border-2 border-[#3f3f3f] rounded-full py-3 group hover:border-primary w-40 h-40">
                            <img src={skill.logo} alt="" className='w-20'/>
                            <h2 className='text-gray-400 group-hover:text-white'>{skill.title}</h2>
                        </div>
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default Skills;