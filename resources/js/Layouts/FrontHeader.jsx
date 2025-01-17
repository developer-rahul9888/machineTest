import React, { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js"; // Assuming Ziggy is used for route management
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Sidebar Component
const FrontHeader = ({ toggleSidebar }) => { 

    const [isOpen, setIsOpen] = useState(false);
    const dropdownBtnRef = useRef(null);
    const dropdownMenuRef = useRef(null);

    useEffect(() => {
        // Hide menu initially
        gsap.set(dropdownMenuRef.current, { opacity: 0, y: -20, display: 'none' });
    
        // Check if the device is touch-enabled
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
        if (!isTouchDevice) {
          // Desktop hover events
          const handleMouseEnter = () => showDropdown();
          const handleMouseLeave = () => hideDropdownWithDelay();
    
          dropdownBtnRef.current.addEventListener('mouseenter', handleMouseEnter);
          dropdownMenuRef.current.addEventListener('mouseenter', handleMouseEnter);
    
          dropdownBtnRef.current.addEventListener('mouseleave', handleMouseLeave);
          dropdownMenuRef.current.addEventListener('mouseleave', handleMouseLeave);
    
          return () => {
            // dropdownBtnRef.current.removeEventListener('mouseenter', handleMouseEnter);
            // dropdownMenuRef.current.removeEventListener('mouseenter', handleMouseEnter);
            // dropdownBtnRef.current.removeEventListener('mouseleave', handleMouseLeave);
            // dropdownMenuRef.current.removeEventListener('mouseleave', handleMouseLeave);
          };
        }
    
        // Always support click events (works for both desktop and mobile)
        const handleClick = (event) => {
          event.stopPropagation(); // Prevent closing immediately when clicking the button
          toggleDropdown();
        };
    
        dropdownBtnRef.current.addEventListener('click', handleClick);
    
        // Close dropdown if clicked outside
        const handleOutsideClick = (event) => {
          if (isOpen && !dropdownMenuRef.current.contains(event.target) && !dropdownBtnRef.current.contains(event.target)) {
            hideDropdown();
          }
        };
    
        document.addEventListener('click', handleOutsideClick);
    
        return () => {
          dropdownBtnRef.current.removeEventListener('click', handleClick);
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [isOpen]);

      const toggleDropdown = () => {
        if (!isOpen) {
          showDropdown();
          setIsOpen(true);
        } else {
          hideDropdown();
          setIsOpen(false);
        }
      };
    
      const showDropdown = () => {
        gsap.to(dropdownMenuRef.current, { opacity: 1, y: 0, display: 'block', duration: 0.3, ease: 'power1.out' });
      };
    
      const hideDropdown = () => {
        gsap.to(dropdownMenuRef.current, { opacity: 0, y: -20, display: 'none', duration: 0.3, ease: 'power1.in' });
      };
    
      const hideDropdownWithDelay = () => {
        setTimeout(() => {
          if (!dropdownBtnRef.current.matches(':hover') && !dropdownMenuRef.current.matches(':hover')) {
            hideDropdown();
          }
        }, 200); // Delay for hover-based closing
      };
    
    return (
    <header className="bg-[#180f2a] text-gray-300 sticky top-0 z-20" id="header">
            <div className='bg-[#180f2a] w-full z-10'>
                <div
                    className="max-w-7xl py-2 px-4 sm:px-10 w-full mx-auto flex justify-between items-center justify-center gap-4 ">
                    <a href="#"><img src="/logo.png" id="logo" alt="logo" className='w-24' /></a>

                    {/* <div className="text-[1rem] md:text-[2rem] font-bold text-middle left-[40%] top-[5%] bg-[#180f2a] text-gray-300 z-20"
                        id="hero-text">Your <span className="text-[#e9ad48]" id="hero-success">Success</span> Partner!</div> */}

                    <div className="relative">
                        <button id="dropdownBtn" ref={dropdownBtnRef} className='ml-7'>
                            <svg className="w-10 h-10" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <div id="dropdownMenu" ref={dropdownMenuRef}
                            className="absolute hidden bg-white text-gray-700 shadow-lg mt-2 w-60 py-5 px-2 -right-0">
                            <div className="flex flex-col space-y-5 text-lg">
                                <Link href="/" className="flex items-center space-x-3">
                                    <span className="border border-gold h-full" style={{ borderColor : "#C5985E", height: "25px" }}></span>
                                    <span>Home</span>
                                </Link>
                                <a href="#" className="flex items-center space-x-3">
                                    <span className="border border-gold h-full" style={{ borderColor : "#C5985E", height: "25px" }}></span>
                                    <span>Success Stories</span>
                                </a>
                                <a href="#" className="flex items-center space-x-3">
                                    <span className="border border-gold h-full" style={{ borderColor : "#C5985E", height: "25px" }}></span>
                                    <span>Career</span>
                                </a>
                                <a href="#" className="flex items-center space-x-3">
                                    <span className="border border-gold h-full" style={{ borderColor : "#C5985E", height: "25px" }}></span>
                                    <span>Collaborate</span>
                                </a>
                                <a href="#" className="flex items-center space-x-3">
                                    <span className="border border-gold h-full" style={{ borderColor : "#C5985E", height: "25px" }}></span>
                                    <span>Life @ INF</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </header>
)
};

export default FrontHeader;
