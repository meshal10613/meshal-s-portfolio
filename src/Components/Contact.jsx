import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { SlEnvolope } from 'react-icons/sl';
import { Slide, toast } from 'react-toastify';
import { FaLocationDot } from 'react-icons/fa6';
import GitHubCommits from './GitHubCommits';

// Service ID service_dddgh6r

const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
        phone: "",
        title: "",
    });

    const handleChange = (e) => {
        setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target?.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        {
            from_email: formData.email,
            from_name: formData?.name,
            message: formData.message,
            title: formData?.title,
            phone: formData?.phone,
        },
        `${import.meta.env.VITE_USER_PUBLIC_KEY}`
        )
        .then(() => {
            toast.success('Message sent successfully!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
            setFormData({ email: "", name: "", message: "" , title: "", phone: ""});
        })
        .catch((error) => {
            console.error("Email error:", error);
            alert("Failed to send message. Please try again.");
        });
    };

    return (
        <section id='contact' className='p-5 lg:p-10 spy-section'>
            <span data-aos="fade-up" data-aos-easing="ease" duration="5000" className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary w-fit px-5">
                <SlEnvolope size={15} className='group-hover:text-primary'/>
                <span>Contact</span>
            </span>

            <div className=''>
                <div className='space-y-3 mb-10'>
                    <h2 data-aos="fade-up" data-aos-easing="ease" duration="5000" className='text-4xl md:text-5xl mb-10 font-syne'>Let's Work <span className='text-primary'>Together!</span></h2>
                    <a href="tel:+8801764447574" data-aos="fade-up" data-aos-easing="ease" duration="5000" className='flex items-center gap-2 text-xl hover:link-primary link-hover'>+880 1764447574 <FaWhatsapp className='text-primary' size={20}/></a>
                    <a href="mailto:syedmohiuddinmeshal24@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer" data-aos="fade-up" data-aos-easing="ease" duration="5000" className='flex items-center gap-2 text-xl hover:link-primary link-hover'>syedmohiuddinmeshal24@gmail.com <SiGmail size={20} className='text-primary' /></a>
                    <p data-aos="fade-up" data-aos-easing="ease" duration="5000" className='text-xl flex items-center gap-2'>Jhalakathi, Barisal, Bangladesh<FaLocationDot size={20} className='text-primary' /></p>
                </div>
                <div className=''>
                    <form onSubmit={handleSubmit} className='space-y-3'>
                        {/* Name & Email */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 w-full'>
                            <div data-aos="fade-right" data-aos-easing="ease" duration="5000" className='flex flex-col gap-3'>
                                <label htmlFor="Name" className='text-2xl'>Name<span className='text-primary'>*</span></label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} id="" placeholder='Enter Your Name' className='input  rounded-3xl text-white w-full'/>
                            </div>
                            <div data-aos="fade-left" data-aos-easing="ease" duration="5000" className='flex flex-col gap-3'>
                                <label htmlFor="Email" className='text-2xl'>Email<span className='text-primary'>*</span></label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} id="" placeholder='Enter Your Email' className='input rounded-3xl text-white w-full' required/>
                            </div>
                        </div>
                        {/* Phone & Subject */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 w-full'>
                            <div data-aos="fade-right" data-aos-easing="ease" duration="5000" className='flex flex-col gap-3'>
                                <label htmlFor="Phone" className='text-2xl'>Phone</label>
                                <input type="number" name="phone" value={formData.phone} onChange={handleChange} id="" placeholder='Enter Your Phone Number' className='input  rounded-3xl text-white w-full'/>
                            </div>
                            <div data-aos="fade-left" data-aos-easing="ease" duration="5000" className='flex flex-col gap-3'>
                                <label htmlFor="Title" className='text-2xl'>Title</label>
                                <input type="text" name="title" value={formData.title} onChange={handleChange} id="" placeholder='Enter Your Title' className='input rounded-3xl text-white w-full'/>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-easing="ease" duration="5000" className='flex flex-col gap-3'>
                            <label htmlFor="Message" className='text-2xl'>Message<span className='text-primary'>*</span></label>
                            <input type="text" name="message" value={formData.message} onChange={handleChange} id="" placeholder='Enter Your Message' className='textarea text-white w-full' required/>
                        </div>
                        <button data-aos="fade-up" data-aos-easing="ease" duration="5000" type='submit' className='btn btn-block border-2 border-[#25ef7c] text-xl text-black bg-[#25ef7c] transition-all hover:text-[#25ef7c] hover:border-[#25ef7c] hover:bg-[#1f1f1f] rounded-3xl h-13 my-5'>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
            {/* <div className='mt-10'>
                <GitHubCommits/>
            </div> */}
        </section>
    );
};

export default Contact;