import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../../Utils/fakedDB';
const DetailsJob = () => {
    const details = useLoaderData();
    // console.log(details.id);
    const handleAppliedJob=(id)=>{
        addToDb(id);
    }
    return (
        <div>
            <h1 className='bg-violet-100 text-3xl text-black font-bold text-center py-10 px-5 mt-4 mb-4 gap-5'>Job Details</h1>
            <div className='flex bg-violet-50 p-10'>
                <div className='w-[65%] py-8'>
                    <h1 className='text-xl font-bold mb-2'>Job Description:</h1>
                    <p className='text-md mb-5'>{details.job_description}</p>
                    <h1 className='text-xl font-bold mb-2'>Job Requirement: </h1>
                    <p className='text-md mb-5'>{details.job_requirements}</p>
                    <h1 className='text-xl font-bold mb-2'>Experience Needed:</h1>
                    <p className='text-md mb-5'>{details.educational_requirements}</p>
                </div>
                <div className='w-[30%] bg-indigo-100 p-10'>
                    <h2 className='mb-2 text-xl font-bold text-black text-center'>Job details</h2>
                    <div className='flex py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5" stroke="currentColor" class="w-4 h-5 text-purple-400 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className='text-md font-semibold'>Salary: {details.salary} / Month</p>
                    </div>
                    <div className='flex mb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-5 text-purple-400 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                        </svg>

                        <p className='text-md font-semibold'>Job Title: {details.job_title}</p>
                    </div>
                    <h4 className='mb-2 text-xl font-bold text-black text-center'>Contact Information :</h4>
                    <p className='text-md font-semibold'>Phone: {details.phone}</p>
                    <p className='text-md font-semibold'>Email: {details.email}</p>
                    <p className='text-md font-semibold'>Address: {details.address}</p>
                    <button class=" btn bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 rounded-lg mt-4"onClick={()=>handleAppliedJob(details.id)}>Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default DetailsJob;