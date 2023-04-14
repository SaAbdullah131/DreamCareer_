import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs,setJobs]= useState([]);
    useEffect(()=>{
        fetch('/jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <h2 className='text-center text-2xl font-bold text-black mb-2'>Featured Jobs</h2>
            <p className='text-center text-lg mt-2 mb-4 py-2'>Explore Thousands of job opportunities with all the  information that you need to know to jump..</p>
            <div className='sm:grid grid-cols-2 gap-4 mt-4 mb-3 p-5'>
                {
                    jobs.map(job=><Job
                    key={job.id}
                    job={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default Jobs;