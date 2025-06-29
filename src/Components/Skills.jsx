import React, { use, useEffect, useState } from 'react';
import { TbIcons } from 'react-icons/tb';
import ReactImage from '../assets/skills/react.png';
import JavaScript from '../assets/skills/javascript.png';
import Express from '../assets/skills/express.png';
import MongoDB from '../assets/skills/mongodb.png';
import Firebase from '../assets/skills/firebase.png';

const techPromise = fetch("/Tech.json").then(res => res.json());
const skillsPromise = fetch("/SkillsData.json").then(res => res.json())

const Skills = () => {
    const techP = use(techPromise);
    const skillsP = use(skillsPromise);
    const [click, setClick] = useState("All");
    const [skills, setSkills] = useState(skillsP);

    useEffect(() => {
        if(click == "Front-end"){
            const newTech = skillsP.filter((p) => p.class === "Front-end");
            setSkills(newTech);
            return;
        }else if(click == "Back-end"){
            const newTech = skillsP.filter((p) => p.class === "Back-end");
            setSkills(newTech);
            return;
        }else if(click == "Tools"){
            const newTech = skillsP.filter((p) => p.class === "Tools");
            setSkills(newTech);
            return;
        }else{
            setSkills(skillsP);
            return;
        }
    }, [click]);

    return (
        <section id='skills' className='p-5 lg:p-10 flex flex-col spy-section'>
            <span data-aos="fade-up" data-aos-easing="ease" duration="5000" className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary w-fit px-5">
                <TbIcons size={15} className='group-hover:text-primary'/>
                <span>My Skills</span>
            </span>

            <h2 data-aos="fade-up" data-aos-easing="ease" duration="5000" className='text-4xl md:text-5xl mb-10'>My <span className='text-primary'>Advantages</span></h2>

            <div className='flex items-center justify-center gap-5 skill'>
                {
                    techP.map((t) => 
                        <button key={t.id} onClick={() => setClick(t.name)} className={`btn transition-all hover:bg-primary hover:text-black rounded-3xl 
                            ${click === t.name ? "bg-primary text-black" : "text-primary border border-primary"}`}>{t.name}</button>
                    )
                }
            </div>

            <div className=" text-white p-6 md:p-12">
                <div data-aos="fade-up" data-aos-easing="ease" duration="5000" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
                    {
                        skills.map(skill => 
                            <div key={skill.id} className="flex flex-col justify-center items-center gap-3 border-2 border-[#3f3f3f] rounded-full py-3 group hover:border-primary w-40 h-40">
                            <img src={skill.logo} alt="" className='w-20'/>
                            <h2 className='text-gray-400 group-hover:text-white'>{skill.title}</h2>
                        </div>
                        )
                    }
                    {
                        skills.map(skill => 
                            <div key={skill.id} className="flex flex-col justify-center items-center gap-3 border-2 border-[#3f3f3f] rounded-md py-3 group hover:border-primary w-40 h-20">
                                <h2 className='text-gray-400 group-hover:text-white'>{skill.title}</h2>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;