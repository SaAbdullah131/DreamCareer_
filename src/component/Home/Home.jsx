import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeadSec from '../HeadSec/HeadSec';
import { Outlet } from 'react-router-dom';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    return (
        <div className='bg-gray-50 mt-2'>
           <HeadSec></HeadSec>
           <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;