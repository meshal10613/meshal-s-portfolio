import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Education = () => {
    return (
        <section id='education' className='p-5 lg:p-10 flex flex-col spy-section'>
            <span data-aos="fade-up" data-aos-easing="ease" duration="5000" className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary w-fit px-5">
                <FaBriefcase size={15} className='group-hover:text-primary'/>
                <span>Education</span>
            </span>

            <div>
                <h2 data-aos="fade-up" data-aos-easing="ease" duration="5000" className='text-4xl md:text-5xl mb-10'>Education & <span className='text-primary'>Experience</span></h2>

                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li data-aos="fade-right" data-aos-easing="ease" duration="5000" className='group'>
                        <div className="timeline-middle group-hover:text-primary" >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end space-y-3">
                            <time className="font-mono italic">2020-2024</time>
                            <div className="text-xl font-black">Diploma in Computer Technology</div>
                            <p className='text-gray-400'> Successfully completed a four-year Diploma in Computer Technology with a CGPA of 3.61 out of 4.00. During this program, I built a solid foundation in computer science principles, software development, networking, and database systems. My time at <span className='font-semibold group-hover:text-white'>Barisal Polytechnic Institute, Barisal, Bangladesh</span> sharpened my problem-solving abilities and deepened my passion for technology and programming.</p>
                        </div>
                        <hr />
                    </li>
                    {/* <li data-aos="fade-left" data-aos-easing="ease" duration="5000" className='group'>
                        <hr />
                        <div className="timeline-middle group-hover:text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                            />
                        </svg>
                        </div>
                        <div className="timeline-end md:mb-10">
                        <time className="font-mono italic">2020</time>
                        <div className="text-lg font-black">Secondary School Certificate</div>
                        <p className='text-gray-400'>Completed Secondary School Certificate (SSC) in science department, achieving an excellent GPA of 4.89 out of 5.00. This academic phase laid the groundwork for my analytical thinking and nurtured my curiosity in technology and logical problem-solving. My achievements reflect a strong commitment to learning and an early inclination toward the IT field.</p>
                        </div>
                        <hr />
                    </li> */}
                </ul>
            </div>
        </section>
    );
};

export default Education;