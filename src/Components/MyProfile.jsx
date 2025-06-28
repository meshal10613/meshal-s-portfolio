import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const MyProfile = () => {
    return (
        <div className='w-98 border-2 border-[#3f3f3f] rounded-3xl mx-auto mt-10 lg:my-20 p-10'>
            <div>
                <div className='flex justify-between items-center'>
                    {/* <img src="/logo1.png" alt="" className='w-fit h-32 p-0'/> */}
                    <h2 className='text-4xl font-bold'>MESHAL</h2>
                    <p className='font-semibold'>MERN stack <br /> developer</p>
                </div>
                <div className='my-10'>
                    <img src="/meshal-black-white.jpg" alt="meshal" className='w-60 h-60 rounded-full mx-auto border-2 
                    border-[#3f3f3f] hover:border-[#25ef7c]' />
                </div>
                <div className='space-y-2'>
                    <h2 className='text-center text-white text-[18px]'>syedmohiuddinmeshal24@gmail.com</h2>
                    <h2 className='text-center text-white text-xl'>Based in Barisal, Bangladesh</h2>
                </div>
                <div className='my-5 flex items-center justify-center gap-5'>
                    <a href='https://github.com/meshal10613' target='_blank' className='p-3 border-2 border-[#3f3f3f] rounded-full w-fit cursor-pointer group hover:border-[#25ef7c]'>
                        <FaGithub size={20} className='group-hover:text-[#25ef7c]'/>
                    </a>
                    <a href='https://www.linkedin.com/in/10613-meshal/' target='_blank' className='p-3 border-2 border-[#3f3f3f] rounded-full w-fit cursor-pointer group hover:border-[#25ef7c]'>
                        <FaLinkedin size={20} className='group-hover:text-[#25ef7c]'/>
                    </a>
                    <a href='https://www.facebook.com/meshal.67/' target='_blank' className='p-3 border-2 border-[#3f3f3f] rounded-full w-fit cursor-pointer group hover:border-[#25ef7c]'>
                        <FaFacebook size={20} className='group-hover:text-[#25ef7c]'/>
                    </a>
                    <a href='https://x.com/syed_meshal' target='_blank' className='p-3 border-2 border-[#3f3f3f] rounded-full w-fit cursor-pointer group hover:border-[#25ef7c]'>
                        <FaSquareXTwitter size={20} className='group-hover:text-[#25ef7c]'/>
                    </a>
                </div>
                <div>
                    <a href="/public/Meshal.pdf" download={true} className='btn btn-block border-2 border-[#25ef7c] text-xl text-black bg-[#25ef7c] transition-all hover:text-[#25ef7c] hover:border-[#25ef7c] hover:bg-[#1f1f1f] rounded-3xl h-13'>RESUME</a>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;