import React, { useState } from 'react';
import { Outlet } from 'react-router';
import MyProfile from '../Components/MyProfile';
import { IoHomeOutline, IoMenu } from 'react-icons/io5';
import { FaBriefcase} from 'react-icons/fa';
import { LuUserRound } from 'react-icons/lu';
import { SlEnvolope } from 'react-icons/sl';
import { GoProject } from 'react-icons/go';
import { TbIcons } from 'react-icons/tb';

const HomeLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    //     const sections = document.querySelectorAll("section.spy-section");

    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     setActiveSection(entry.target.id);
    //                 }
    //             });
    //         },
    //         {
    //             threshold: 0.6, // Trigger when 60% of the section is visible
    //         }
    //         );

    //         sections.forEach((section) => observer.observe(section));
    //         return () => sections.forEach((section) => observer.unobserve(section));
    // }, []);

    return (
        <div className='flex flex-col lg:flex-row items-center gap-10 justify-between mx-5'>
            {/* <div className='w-full flex md:block md:fixed md:top-0 md:left-5 m-1'> */}
            <div className='w-full md:w-80 lg:fixed lg:top-0 lg:left-5 lg:h-screen flex flex-col items-center justify-between'>
                <MyProfile/>
            </div>
            <div className='ml-0 lg:ml-92 p-6 lg:p-10'>
                <Outlet/>
            </div>
            <div>
                <div className='block fixed top-5 md:top-12 right-5 lg:right-10'>
                    <div className="">
                        {/* Open Button */}
                        <button
                            className="p-3 border-2 border-[#3f3f3f] rounded-full w-fit cursor-pointer group hover:border-[#25ef7c] block"
                            onClick={() => setIsOpen(true)}
                        >
                            <IoMenu size={30} className='group-hover:text-[#25ef7c]'/>
                        </button>
            
                        {/* Overlay */}
                        {isOpen && (
                            <div
                            className="fixed inset-0 bg-opacity-30 z-40"
                            onClick={() => setIsOpen(false)}
                            />
                        )}
            
                        {/* Drawer */}
                        <div
                            className={`fixed top-0 right-0 h-full p-10 w-80 bg-[#3f3f3f] shadow-lg z-50 transition-transform duration-300 ${
                            isOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                        >
                            <div className="flex items-center justify-between p-4">
                            <h3 className="text-lg font-semibold">Menu</h3>
                            <button
                                className="btn btn-sm btn-circle btn-ghost"
                                onClick={() => setIsOpen(false)}
                            >
                                ✕
                            </button>
                            </div>
            
                            <div className="p-4 space-y-5">
                                <a className={`${ activeSection === "home" ? "text-primary font-bold" : ""} flex items-center gap-2 group`} 
                                href="#home" onClick={() => {setIsOpen(false); setActiveSection("home")}}>
                                    <IoHomeOutline size={20} className='group-hover:text-primary' />
                                    <span className='group-hover:text-white'>Home</span>
                                </a>
                                <a className={`${ activeSection === "about" ? "text-primary font-bold" : ""} flex items-center gap-2 group`} href="#about" onClick={() => {setIsOpen(false); setActiveSection("about")}}>
                                    <LuUserRound size={20} className='group-hover:text-primary'/>
                                    <span className='group-hover:text-white'>About</span>
                                </a>
                                <a className={`${ activeSection === "skills" ? "text-primary font-bold" : ""} flex items-center gap-2 group`} href="#skills" onClick={() => {setIsOpen(false); setActiveSection("skills")}}>
                                    <TbIcons size={20} className='group-hover:text-primary' />
                                    <span className='group-hover:text-white'>Skills</span>
                                </a>
                                <a className={`${ activeSection === "education" ? "text-primary font-bold" : ""} flex items-center gap-2 group`} href="#education" onClick={() => {setIsOpen(false), setActiveSection("education")}}>
                                    <FaBriefcase size={20} className='group-hover:text-primary'/>
                                    <span className='group-hover:text-white'>Education</span>
                                </a>
                                <a className={`${ activeSection === "projects" ? "text-primary font-bold" : ""} flex items-center gap-2 group`} href="#projects"onClick={() => {setIsOpen(false), setActiveSection("projects")}}>
                                    <GoProject size={20} className='group-hover:text-primary' />
                                    <span className='group-hover:text-white'>Projects</span>
                                </a>
                                <a className={`${ activeSection === "contact" ? "text-primary font-bold" : ""} flex items-center gap-2 group`} href="#contact" onClick={() => {setIsOpen(false); setActiveSection("contact")}}>
                                    <SlEnvolope size={20} className='group-hover:text-primary'/>
                                    <span className='group-hover:text-white'>Contact</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`hidden ${isOpen ? "" : "lg:block"} fixed top-1/2 right-10 transform -translate-y-1/2 z-50 ${isOpen ? "hidden" : "fixed"}`}>
                    <div className=" border border-gray-600 rounded-full p-4 flex flex-col items-center space-y-6">
                        <a href='#home' onClick={() => setActiveSection("home")} className="hover:text-primary transition-transform cursor-pointer tooltip tooltip-left" data-tip="Home">
                            <IoHomeOutline size={20} className={`${ activeSection === "home" ? "text-primary" : ""}`}/>
                        </a>
                        <a href='#about' onClick={() => setActiveSection("about")} className="hover:text-primary transition-transform cursor-pointer tooltip tooltip-left" data-tip="About">
                            <LuUserRound size={20} className={`${ activeSection === "about" ? "text-primary" : ""}`}/>
                        </a>
                        <a href='#skills' onClick={() => setActiveSection("skills")} className="hover:text-primary transition-transform cursor-pointer tooltip tooltip-left" data-tip="Skills">
                            <TbIcons size={20} className={`${ activeSection === "skills" ? "text-primary" : ""}`} />
                        </a>
                        <a href='#education' onClick={() => setActiveSection("education")} className="hover:text-primary transition-transform cursor-pointer tooltip tooltip-left" data-tip="Education">
                            <FaBriefcase size={20} className={`${ activeSection === "education" ? "text-primary" : ""}`} />
                        </a>
                        <a href='#projects' onClick={() => setActiveSection("projects")} className="hover:text-primary transition-transform cursor-pointer tooltip tooltip-left" data-tip="Projects">
                            <GoProject size={20} className={`${ activeSection === "projects" ? "text-primary" : ""}`} />
                        </a>
                        <a href='#contact' onClick={() => setActiveSection("contact")} className="hover:text-primary transition-transform cursor-pointer tooltip tooltip-left" data-tip="Contact">
                            <SlEnvolope size={20} className={`${ activeSection === "contact" ? "text-primary" : ""}`} />
                        </a>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default HomeLayout;