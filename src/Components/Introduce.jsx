import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';

const Introduce = () => {
    return (
        <div id='home'>
            <main className="lg:p-10 flex flex-col">
                <div>
                    <p className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary">
                        <IoHomeOutline size={15} className='group-hover:text-primary'/>
                        <span>Home</span>
                    </p>
                    <h1 className="text-5xl md:text-7xl leading-tight">
                        Hello! I'm <span className="text-primary">Syed Mohiuddin Meshal</span>,<br />
                        MERN Stack Developer
                    </h1>
                    <p className="text-gray-400 mt-4 max-w-xl">
                        I design and code beautifully simple things and I love what I do.
                        <br /> Just simple like that!
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Introduce;