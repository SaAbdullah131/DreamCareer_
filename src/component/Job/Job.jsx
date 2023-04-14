import React from 'react';

const Job = (props) => {
    const {id,logo_img,job_title,company_name,job_type,site,location,salary} = props.job;
    return (
        <div className='border-2 border-sky-200 p-3'>
            <img className='object-contain w-[35%] h-[40%] center' src={logo_img} alt="" />
            <h2 className='text-2xl ml-2'>{job_title}</h2>
            <h3 className='text-xl ml-2'>{company_name}</h3>
            <div className='flex gap-5 p-2 items-center'>
                <p className='text-blue-400 border-2 border-blue-500 px-3 py-1'>{job_type}</p>
                <p className='text-blue-400 border-2 border-blue-500 px-3 py-1'>{site}</p>
            </div>
            <div className='flex gap-4 items-center ml-2 mb-1'>
                <h4>{location}</h4>
                <h4>{salary}</h4>
            </div>
            <button class=" btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">View Details</button>
        </div>
    );
};

export default Job;