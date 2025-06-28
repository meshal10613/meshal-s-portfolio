import React from 'react';
// import CountUp from 'react-countup';
import { IoHomeOutline } from 'react-icons/io5';
import { Typewriter } from 'react-simple-typewriter';

const Introduce = () => {

    // const cards = [
    //     {
    //         id: 1,
    //         title: 1,
    //         description: "YEARS OF EXPERIENCE"
    //     },
    //     {
    //         id: 2,
    //         title: 10,
    //         description: "PROJECTS COMPLETED", 
    //     },
    //     {
    //         id: 3,
    //         title: 20,
    //         description: "HAPPY CLIENTS"
    //     },
    // ];
    {/*ON 10 COUNTRIES*/}

    return (
        <section id='home' className='p-5 lg:p-10 flex flex-col spy-section'>
            <div>
                <span data-aos="fade-up" data-aos-easing="ease" duration="5000" className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary w-fit px-5">
                    <IoHomeOutline size={15} className='group-hover:text-primary'/>
                    <span>Home</span>
                </span>
                <h1 data-aos="fade-up" data-aos-easing="ease" duration="5000" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                    Hello! I'm <span className="text-primary">Syed Mohiuddin Meshal</span>,<br />
                    <span>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Web Developer', 'AI Developer']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </span>
                </h1>
                <p data-aos="fade-up" data-aos-easing="ease" duration="5000" className="text-gray-400 mt-4 max-w-xl">
                    My goal is to bridge the gap between design and development with clean, scalable code.
                </p>
                <a data-aos="fade-up" data-aos-easing="ease" duration="5000" href="#contact" className='btn border-2 border-[#25ef7c] text-xl text-black bg-[#25ef7c] transition-all hover:text-[#25ef7c] hover:border-[#25ef7c] hover:bg-[#1f1f1f] rounded-3xl h-10 w-40 my-5'>Let's Talk</a>

                {/* <div className='flex justify-around items-center my-10 lg:my-20'>
                    {
                        cards.map((card) =>
                        <div data-aos="fade-up" data-aos-easing="ease" duration="5000" key={card.id} className='space-y-5'>
                            <h2 className='text-6xl font-semibold text-primary'>
                                <CountUp end={card.title} duration={5}/>+
                            </h2>
                            <p className='text-gray-400'>{card.description}</p>
                        </div>
                        )
                    }
                </div> */}
            </div>
        </section>
    );
};

export default Introduce;