import React from 'react';

const SingleAppliedJobs = (props) => {
    const { logo_img, job_title, company_name, location, job_type, site, salary } = props.job;
    return (
        <div>
              <select name="site" id="site" className='bg-violet-100 mb-4 px-5 py-3 place-self-start'>
               <option value="" disabled selected>Filter</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
             </select>
               
            <div className='flex gap-5 items-center justify-around py-3 mb-5 bg-violet-100'>
                <img className='object-contain w-[35%] h-[30%] center rounded-xl' src={logo_img} alt="" />
                <div>
                    <h2 className='text-2xl ml-2'>{job_title}</h2>
                    <h3 className='text-xl ml-2'>{company_name}</h3>
                    <div className='flex gap-5 p-2 items-center'>
                        <p className='text-blue-400 border-2 border-blue-500 px-3 py-1'>{job_type}</p>
                        <p className='text-blue-400 border-2 border-blue-500 px-3 py-1'>{site}</p>
                    </div>
                    <div className='flex gap-4 items-center ml-2 mb-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-5 text-purple-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <h4 className='text-semibold text-lg'>{location}</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5" stroke="currentColor" class="w-4 h-5 text-purple-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className='text-semibold text-lg'>Salary: {salary}</h4>
                    </div>
                </div>

                <div>
                    <button class=" btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-4 rounded-lg">View Details</button>
                </div>
            </div>

        </div>
    );
};

export default SingleAppliedJobs;