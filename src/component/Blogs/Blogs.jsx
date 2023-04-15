import React from 'react';

const Blogs = () => {
    return (
        <div className='p-10 bg-violet-200 mt-10 rounded-xl'>
            <h1 className='text-black font-bold text-2xl underline text-center p-4'>Question Answering</h1>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                <div className="collapse-title text-xl font-medium">
                   What is Context Api & When it's used?
                </div>
                <div className="collapse-content">
                    <p>Context Api is a React Feature that gives us to share data between components without need to pass the data through a chain.The context Api allow to define data at a higher level of component and then make this available to any component when it needs.</p>
                    <p>When need to share data between multiple component which are not directly connected in the component tree. For this we used Context Api..</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                <div className="collapse-title text-xl font-medium">
                   What is Custom Hook?
                </div>
                <div className="collapse-content">
                    <p>Custom hook as like javascript function which is start with the word 'use' and allow you use reuseable logic from component. For Share any logic between component without need to use high-order component trees.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                <div className="collapse-title text-xl font-medium">
                    What is useRef and Why should you use?
                </div>
                <div className="collapse-content">
                    <p>For Accessing DOM Element use useRef which is reference a DOM Element, and then manipulate it using imperative code.It's way to store and manipulate values across re-renders without triggering.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                <div className="collapse-title text-xl font-medium">
                    What is useMemo and why should we use it?
                </div>
                <div className="collapse-content">
                    <p>useMemo is react hook which allow to memorize the result of a function call and cache it based on it's dependencies.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;