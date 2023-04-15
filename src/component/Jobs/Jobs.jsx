import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Job from '../Job/Job';

const Jobs = () => {
    const jobsLoad = useLoaderData();
    //  console.log(jobsLoad);
    //    const jobsLoadFirst = jobsLoad.splice(0,4);
    //    console.log(jobsLoadFirst);
    const [firstTimeJobs, setFirstJobs] = useState(jobsLoad.slice(0, 4));
    const [showClick, setShowClick] = useState(true);

    const clickShowAll = () => {
        setFirstJobs(jobsLoad);
        setShowClick(false) ;
    }
    return (
        <div>
            <h2 className='text-center text-2xl font-bold text-black mb-2 p-3 mt-10'>Featured Jobs</h2>
            <p className='text-center text-lg mt-2 mb-4 py-2'>Explore Thousands of job opportunities with all the  information that you need to know to jump..</p>
            <div className=' flex flex-col justify-center items-center'>
                <div className='sm:grid grid-cols-2 gap-4 mt-4 mb-3 p-2'>
                    {
                        firstTimeJobs.map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                    }
                </div>
                <button onClick={() => clickShowAll()} className={`${showClick ? 'inline-block' : 'hidden'} inline-block btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-lg  bottom-0 mt-2`}>Show All</button>
            </div>
        </div>
    );
};

export default Jobs;