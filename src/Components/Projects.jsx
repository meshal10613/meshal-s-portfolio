import React, { useState } from 'react';
import { GoProject } from 'react-icons/go';
import { Link, useLoaderData } from 'react-router';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaGithub, FaLink } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const Projects = () => {
    const projects = useLoaderData();
    const [click, setClick] = useState([]);

    const handleDetails = (project) => {
        setClick([]);
        setClick(project);
        document.getElementById('modal').showModal();
    };

    return (
        <section id='projects' className='p-5 lg:p-10 flex flex-col spy-section'>
            <span data-aos="fade-up" data-aos-easing="ease" duration="5000" className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary w-fit px-5">
                <GoProject size={15} className='group-hover:text-primary'/>
                <span>Projects</span>
            </span>

            <h2 data-aos="fade-up" data-aos-easing="ease" duration="5000" className='text-4xl md:text-5xl mb-10 font-syne'>Featured <span className='text-primary'>Projects</span></h2>

            {/* <div data-aos="fade-up" data-aos-easing="ease" duration="5000" className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    projects.map(project => 
                    <div key={project.id} className='border-2 border-[#3f3f3f] p-5 md:p-10 rounded-3xl group'>
                        <Carousel autoPlay={true} interval={2000} infiniteLoop={true} showIndicators={false} showThumbs={false}>
                            <div>
                                <img src={project.image[0]} className='rounded-3xl w-98 h-72 lg:h-98 mb-4 lg:mb-6' />
                            </div>
                            <div>
                                <img src={project.image[1]} className='rounded-3xl w-98 h-72 lg:h-98 mb-4 lg:mb-6' />
                            </div>
                            <div>
                                <img src={project.image[2]} className='rounded-3xl w-98 h-72 lg:h-98 mb-4 lg:mb-6' />
                            </div>
                        </Carousel>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-2xl lg:text-3xl font-semibold text-white group-hover:text-primary group-hover:underline'>{project.name}</h2>
                            <Link onClick={() => handleDetails(project)} className='btn border-2 border-[#25ef7c] text-xl text-black bg-[#25ef7c] transition-all hover:text-[#25ef7c] hover:border-[#25ef7c] hover:bg-[#1f1f1f] rounded-3xl h-10 w-32'>Details</Link>
                        </div>
                    </div>
                    )
                }
            </div> */}

            <div
                className="grid grid-cols-1 gap-10"
                >
                {projects.map((project) => (
                    <div
                    data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-duration="5000"
                    key={project.id}
                    className="border-2 border-[#3f3f3f] p-5 md:p-10 rounded-3xl group bg-base-100"
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="w-full lg:w-1/2">
                            <Carousel
                                autoPlay
                                interval={2000}
                                infiniteLoop
                                showIndicators={false}
                                showThumbs={false}
                            >
                                {project.image.map((img, index) => (
                                <div key={index}>
                                    <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="rounded-3xl w-full h-72 object-cover"
                                    />
                                </div>
                                ))}
                            </Carousel>
                            </div>

                            <div className="w-full lg:w-1/2 flex flex-col justify-between h-full">
                            <h2 className="text-2xl lg:text-3xl font-semibold text-white group-hover:text-primary group-hover:underline mb-3">
                                {project.name}
                            </h2>
                            <p className="text-gray-400 text-justify mb-5">{project.description}</p>
                            <div>
                                <Link
                                onClick={() => handleDetails(project)}
                                className="btn border-2 border-[#25ef7c] text-lg text-black bg-[#25ef7c] transition-all hover:text-[#25ef7c] hover:border-[#25ef7c] hover:bg-[#1f1f1f] rounded-3xl h-10 w-32"
                                >
                                Details
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <dialog id="modal" className="modal">
            <div className="modal-box space-y-5 group">
                <h2 className='text-2xl text-primary'>{click?.name}</h2>
                <p>{click?.description}</p>
                <div className='grid grid-cols-3 md:grid-cols-4 gap-y-3'>
                    {
                        click?.techStack !== undefined ? 
                        click?.techStack.map((tech, index) =>
                            <span key={index} className="badge badge-outline rounded-2xl badge-white">{tech}</span>
                        ) :
                        <></>
                    }
                </div>
                <div >
                    <h2 className='text-xl mb-2'>Challenges</h2>
                    <div className='flex flex-col gap-2'>
                        {
                            click?.challenge !== undefined ? 
                            click?.challenge.map((c, index) =>
                                <span key={index} className="ml-5">{index + 1}. {c}</span>
                            ) :
                            <></>
                        }
                    </div>
                </div>
                <div>
                    <h2 className='text-xl'>Future Improvements</h2>
                    <p className='ml-5'>{click?.futurePlans}</p>
                </div>
                <div className="flex items-center justify-between">
                    <a href={click?.liveLink} target='_blank' className='btn'>
                        <FaLink size={20} className='' />
                        Link
                    </a>
                    <a href={click?.githubClient} target='_blank' className='flex gap-1 items-center btn'>
                        <FaGithub size={20} className=''/>
                        Github
                    </a>
                    <form method="dialog">
                        <button className="btn flex gap-1 items-center">
                            <FaXmark size={20} className=''/>
                            Close
                        </button>
                    </form>
                </div>
            </div>
            </dialog>
        </section>
    );
};

export default Projects;