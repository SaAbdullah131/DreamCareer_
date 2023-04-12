import React, { useEffect, useState } from 'react';
import CategoryJobs from '../CategoryJobs/CategoryJobs';

const FeatureJobs = () => {
    const[jobsCategory,setJobsCategory] = useState([]);

    useEffect(()=>{
        fetch('job_cate.json')
        .then(res =>res.json())
        .then(data=>setJobsCategory(data))
    },[]);

    return (
        <div className='mt-5 bg-slate-100'>
            <h2 className='text-center text-2xl font-bold text-black mb-2'>Job Category List</h2>
            <div className='sm:grid md:grid-cols-4 sm:gap-3 gap-5 p-5'>
               {
               jobsCategory.map(jobCategory=><CategoryJobs key={jobCategory.id} job={jobCategory}></CategoryJobs>)
               }
            </div>
        </div>
    );
};

export default FeatureJobs;