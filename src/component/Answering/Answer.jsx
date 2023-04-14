import React from 'react';
import { getStoredJobs } from '../../Utils/fakedDB';

const Answer = () => {
    const jobs = getStoredJobs();
    return (
        <div>
            <h1 className='text-center text-2xl underline text-accent p-3'>Question Answering</h1>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Answer; 