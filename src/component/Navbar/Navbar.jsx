import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
                {/* Logo Section */}
                <div>
                    <Link to='/' className='inline-flex items-center'>
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                            Dream-Career
                        </span>
                    </Link>
                </div>

                {/* Nav Items Section */}
                <div>
                    <ul className='items-center hidden space-x-8 lg:flex text-black font-semibold'>
                        <li>
                            <NavLink
                                to='/statistic'
                                className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}
                            >
                                    Statistic
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/applied'
                                className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}
                            >
                                Applied Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blogs'
                                className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}
                            >
                                Blogs
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Applying</button>
                </div>
                {/* Mobile Navbar Section */}
                <div className='lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>

                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                Dream-Career
                                            </span>
                                        </Link>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/statistic' className='default'>
                                                Statistic
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/applied'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Applied Jobs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/blogs'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Blogs
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;