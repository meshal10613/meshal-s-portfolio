import React from 'react';
import { LuUserRound } from 'react-icons/lu';

const About = () => {
    return (
        <section id='about' className='p-5 lg:p-10 flex flex-col spy-section'>
            <span data-aos="fade-up" data-aos-easing="ease" duration="5000" className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary w-fit px-5">
                <LuUserRound size={15} className='group-hover:text-primary'/>
                <span>About</span>
            </span>

            <h2 data-aos="fade-up" data-aos-easing="ease" duration="5000" className='text-4xl md:text-5xl mb-10 font-syne'>More Than Code — <br /> A Passion for <span className='text-primary'>Progress</span></h2>

            <p className='text-gray-400'>Hello! My name is Syed Mohiuddin Meshal, and I’m a passionate and dedicated person who loves technology, problem-solving, and the continuous process of learning and growing through code. My journey into programming began with curiosity and quickly evolved into a deep passion for creating meaningful digital solutions.</p>
            <br />
            <p className='text-gray-400'>I specialize in the MERN stack—MongoDB, Express.js, React.js, and Node.js. I enjoy every part of the development process, from designing clean and responsive user interfaces to building powerful backend services. Turning ideas into real-world applications is something that truly excites me.</p>
            <br />
            <p className='text-gray-400'>Outside of programming, I enjoy a mix of physical and strategic activities. Cricket keeps me active and teaches teamwork, while chess challenges my mind and strengthens my strategic thinking.</p>
            <br />
            <p className='text-gray-400'>I consider myself a hardworking, curious, and self-motivated learner who is always looking to grow. I'm constantly exploring new tools and best practices in tech to stay up-to-date and improve my craft. Currently, I’m exploring Next.js to expand my knowledge of full-stack web development and server-side rendering.</p>
        </section>
    );
};

export default About;