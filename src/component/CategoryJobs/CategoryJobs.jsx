import React from 'react';

const CategoryJobs = (props) => {
  const {img,job_title,available_jobs} = props.job;
    return (
        <div className='bg-indigo-300 py-6 px-5 rounded-lg w-50 h-full shadow-xl shadow-green-200'>
            <img className='w-[20%] h-[35%] rounded-lg' src={img} alt="images" />
            <h1 className='text-2xl'>{job_title}</h1>
            <h3 className='text-xl'>{available_jobs}</h3>
        </div>
    );
};

export default CategoryJobs;