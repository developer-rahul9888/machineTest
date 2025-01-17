import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePage } from "@inertiajs/react";
import { showToast } from "../Flash/ToastUtils";
import FrontHeader from "./FrontHeader";
import FrontFooter from "./FrontFooter";


export default function GuestLayout({ children }) {

    const { flash } = usePage().props;

    // Display toast messages
    useEffect(() => {
        if (flash?.success) { showToast('success', flash.success); }
        if (flash?.error) { showToast('error', flash.error); }
    }, [flash]);

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };


    


    return (
        <div className="max-w-[1920px] mx-auto text-black text-sm">
        <div className="bg-white ">

            {/* Main Content */}
                {/* Header */}
                <FrontHeader toggleSidebar={toggleSidebar} />

                {/* Main Content */}
                <ToastContainer />
                
                {children} {/* Render dynamic content here */}

                {/* Footer */}
                <FrontFooter />
        </div>
        </div>
    );
}
