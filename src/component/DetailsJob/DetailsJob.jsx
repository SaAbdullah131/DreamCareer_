import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsJob = () => {
    const details = useLoaderData();

    return (
        <div>
            <div>
                <h1 className='bg-violet-100 text-3xl text-black font-bold text-center p-18 mt-4'>Job Details</h1>
                <div>

                </div>
                <div>


                </div>
            </div>
        </div>
    );
};

export default DetailsJob;