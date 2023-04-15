import React, { useEffect, useState } from 'react';
import { getStoredJobs } from '../../Utils/fakedDB';
import { useLoaderData } from 'react-router-dom';
import SingleAppliedJobs from '../SingleAppliedJobs/SingleAppliedJobs';

const AppliedJobs = () => {

    const jobsArr = useLoaderData();
    console.log(jobsArr);
    return (
        <div className='min-h-screen'>
            <h1 className='bg-violet-100 text-3xl text-black font-bold text-center py-8 px-5 mt-4 mb-4 gap-5'>{jobsArr.length ? `Your Applied Jobs : ${jobsArr.length}` : 'You did not apply Any Jobs'}</h1>
            <div>
                <select name="site" id="site" className='bg-violet-100 mb-4 px-5 py-3 place-self-start'>
                    <option value="" disabled selected>Filter</option>
                    <option value="Onsite">Onsite</option>
                    <option value="Remote">Remote</option>
                </select>
                <div>
                    {
                        jobsArr.map(job => <SingleAppliedJobs
                            key={job.id}
                            job={job}
                        ></SingleAppliedJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;