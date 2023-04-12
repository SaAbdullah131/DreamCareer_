import React from 'react';

const CategoryJobs = (props) => {
  const {img,job_title,available_jobs} = props.job;
    return (
        <div className='bg-indigo-300 py-6 px-5 rounded-lg w-50 h-full shadow-xl shadow-green-200'>
            <img src={img} alt="images" />
            <h1 className='text-center text-2xl'>{job_title}</h1>
            <h3 className='text-center text-xl'>{available_jobs}</h3>
        </div>
    );
};

export default CategoryJobs;