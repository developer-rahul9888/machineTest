import React from 'react';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js'; // Assuming Ziggy is used for route management

// Sidebar Component
const FrontFooter = () => (
    <footer className="bg-[#180f2a] text-gray-300 lg:min-h-screen flex justify-center items-center p-10" id="footer">
        <div className="">
            <img src="/logo.png" alt="logo" className='w-40 mb-1 mx-auto footer-logo' />
            <div className="text-[2rem] text-[#e9ad48] text-middle text-center footer-logo">inches n feet</div>
            <p className="text-2xl mt-5" id="footerText">where excellence find the dimensions...</p>
            <button
                className="bg-[#e3a848] hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded text-center flex mx-auto"
                id="footerBtn"> Contact Us</button>
        </div>
    </footer>
);


export default FrontFooter;
