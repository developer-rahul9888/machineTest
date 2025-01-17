import React, { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import { route } from 'ziggy-js'; // Assuming Ziggy is used for route management

// Sidebar Component
const Sidebar = ({ isVisible, toggleSidebar }) => {


    const handleLogout = () => {
        router.post('/admin/logout');
    };

    return (
    // <aside className="w-64 bg-gray-800 text-white">
    //     <div className="p-4">
    //         <h2 className="text-2xl font-bold">Admin Dashboard</h2>
    //     </div>
    //     <nav>
    //         <ul>
    //             <li className="p-4">
    //                 <Link href={route('dashboard')} className="text-gray-300 hover:text-white">
    //                     Dashboard
    //                 </Link>
    //             </li>
    //             <li className="p-4">
    //                 <Link href={route('users.index')} className="text-gray-300 hover:text-white">
    //                     Users
    //                 </Link>
    //             </li>
    //             <li className="p-4">
    //                 <Link href={route('dashboard')} className="text-gray-300 hover:text-white">
    //                     Settings
    //                 </Link>
    //             </li>
    //         </ul>
    //     </nav>
    // </aside>

    <>
    <div className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50  ${isVisible ? 'block' : 'hidden'} md:hidden` } onClick={toggleSidebar}></div>
    
    <div  className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 bg-gray-900 transform md:translate-x-0 ${isVisible ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} md:block lg:static lg:inset-0"`} >
        <div className="flex items-center justify-center mt-8">
            <div className="flex items-center">
                <svg className="w-12 h-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
                </svg>
                
                <span className="mx-2 text-2xl font-semibold text-white">Dashboard</span>
            </div>
        </div>

        <nav className="mt-10">

        <Link href={route('dashboard')} className={`flex items-center px-6 py-2 mt-4 ${route().current('dashboard') ? 'text-gray-100 bg-gray-700 bg-opacity-25' : 'text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100'}`}>
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>

                <span className="mx-3">Dashboard</span>
                   </Link>


            <Link href={route('projects.index')} className={`flex items-center px-6 py-2 mt-4 ${route().current('projects.index') ? 'text-gray-100 bg-gray-700 bg-opacity-25' : 'text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100'}`}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z">
                    </path>
                </svg>

                <span className="mx-3">Projects {route().current('projects.index')}</span>
                </Link>

            <a className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                href="#" onClick={handleLogout}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                    </path>
                </svg>

                <span className="mx-3">Logout</span>
            </a>
        </nav>
    </div>
    </>
);


}

export default Sidebar;
