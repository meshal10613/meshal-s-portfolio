import React from 'react';
import { SlEnvolope } from 'react-icons/sl';

const Contact = () => {
    return (
        <div id='contact' className='lg:p-10 flex flex-col'>
            <p className="btn btn-outline btn-sm mb-4 rounded-3xl group hover:border-primary">
                <SlEnvolope size={15} className='group-hover:text-primary'/>
                <span>Contact</span>
            </p>
        </div>
    );
};

export default Contact;