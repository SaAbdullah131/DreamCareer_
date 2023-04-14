import React from 'react';
import { getStoredJobs } from '../../Utils/fakedDB';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const SavedJobs = getStoredJobs();
    let jobs  = [];
    const jobsData = useLoaderData();
    for(const id in SavedJobs) {
        const foundJobs = jobsData.find(job=> job.id === id)
        if(foundJobs) {
            jobs.push(jobsData);
        }
    }
    console.log(jobs);
    return (
        <div>
             <h1 className='bg-violet-100 text-3xl text-black font-bold text-center py-10 px-5 mt-4 mb-4 gap-5'>Job Details</h1>
             <div>

             </div>
        </div>
    );
};

export default AppliedJobs;