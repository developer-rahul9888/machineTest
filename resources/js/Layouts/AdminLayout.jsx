import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePage } from "@inertiajs/react";
import { showToast } from "../Flash/ToastUtils";

export default function AdminLayout({ children }) {

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
        <div className="h-screen overflow-hidden flex items-center justify-center" style={{background: "#edf2f7"}}>
        <div className="flex h-screen bg-gray-200 w-full">
            {/* Sidebar */}
            <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Header */}
                <Header toggleSidebar={toggleSidebar} />

                {/* Main Content */}
                <ToastContainer />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    {children} {/* Render dynamic content here */}
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
        </div>
    );
}
