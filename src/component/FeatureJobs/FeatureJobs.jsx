import React, { useEffect, useState } from 'react';

const FeatureJobs = () => {
    const[jobsCategory,setJobsCategory] = useState([]);

    useEffect(()=>{
        fetch('job_cate.json')
        .then(res =>res.json())
        .then(data=>setJobsCategory(data))
    },[]);

    return (
        <div className='mt-5 text-2xl font-bold text-black'>
            <h2 className='text-center'>Job Category List</h2>
            <div>
                {
                    jobsCategory.map(jobCategory=> {
                    console.log(jobCategory.length)
                    }
                    )
                }
            </div>
        </div>
    );
};

export default FeatureJobs;