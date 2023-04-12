import React from 'react';
import { Link } from 'react-router-dom';

const HeadSec = () => {
    return (
        <div>
        <div className='my-container flex flex-col items-center justify-between lg:flex-row mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 h-full'>
            {/* Text Content */}
            <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0 p-8 items-center'>
                <div className='max-w-xl mb-6 lg:mt-8'>
                    <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                    Taking a Step <br></br>Toward Your <br />
                        <span className='inline-block text-blue-400'>Dream Career Opportunities</span>
                    </h2>
                    <p className='text-base text-gray-700 md:text-lg'>Find a job you love, and you'll never have to work a day in your life.Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.Don't be afraid to take a chance on yourself and pursue your dream job. You never know what opportunities may arise. <span className='text-xl font-bold'>Are you feeling stuck in your current job and looking for inspiration for your dream job? </span>Your dream job is out here waiting for you...
                
                    </p>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                    <Link to='/' className='btn md:w-auto md:mr-4'>
                        <div className='inline-flex items-center justify-center w-full h-full'>
                            <p className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Get Started</p>
                        </div>
                    </Link>
                    <Link
                        to='/about'
                        className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
                    >
                        Learn More
                    </Link>
                </div>
            </div>
            {/* Image */}
            <div className='relative lg:w-1/2 '>
                <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                    <img className='fluid rounded-md ' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default HeadSec;