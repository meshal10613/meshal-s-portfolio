import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { SlEnvolope } from 'react-icons/sl';
import { Slide, toast } from 'react-toastify';

// Service ID service_dddgh6r

const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
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
            setFormData({ email: "", name: "", message: "" });
        })
        .catch((error) => {
            console.error("Email error:", error);
            alert("Failed to send message. Please try again.");
        });
    };

    return (
        <div id='contact' className='lg:p-10 flex flex-col'>
            <span data-aos="fade-up" data-aos-easing="ease" duration="5000" className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary w-fit">
                <SlEnvolope size={15} className='group-hover:text-primary'/>
                <span>Contact</span>
            </span>

            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
                <div className='space-y-3 flex-1'>
                    <h2 className='text-4xl md:text-5xl mb-10'>Let's Work <span className='text-primary'>Together!</span></h2>
                    <h2 className='flex items-center gap-2 text-xl'>+880 1764447574 <FaWhatsapp className='text-primary' size={20}/></h2>
                    <h2 className='flex items-center gap-2 text-xl'>syedmohiuddinmeshal24@gmail.com <SiGmail size={20} className='text-primary' /></h2>
                    <p className='text-xl'>Syed Bari, Uttar Mogor, Mogor, Amirabad, Nalchity, Jhalakathi, Barisal - 8200, Bangladesh</p>
                </div>
                <div className='flex-1'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="Name" className='text-2xl ml-5'>Name<span className='text-primary'>*</span></label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} id="" placeholder='Enter Your Name' className='input  rounded-3xl text-white mx-5 w-full'/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="Email" className='text-2xl ml-5'>Email<span className='text-primary'>*</span></label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} id="" placeholder='Enter Your Email' className='input rounded-3xl text-white w-full mx-5' required/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="Message" className='text-2xl ml-5'>Message<span className='text-primary'>*</span></label>
                            <input type="text" name="message" value={formData.message} onChange={handleChange} id="" placeholder='Enter Your Email' className='textarea text-white mx-5 w-full' required/>
                        </div>
                        <button type='submit' className='btn btn-block border-2 border-[#25ef7c] text-xl text-black bg-[#25ef7c] transition-all hover:text-[#25ef7c] hover:border-[#25ef7c] hover:bg-[#1f1f1f] rounded-3xl h-13 mx-5 my-5'>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;