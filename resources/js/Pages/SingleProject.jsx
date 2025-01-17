import React, { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/css'; // Import Swiper's styles

const Home = ({project, projects}) => {

    useEffect(() => {
        // Dynamically load the external script
        const script = document.createElement('script');
        script.src = '/js/my-library.js'; // Path to your JS file in the public directory
        script.async = true;

        script.onload = () => {
            // Now you can use the library after it's loaded
            if (typeof myLibraryFunction === 'function') {
                myLibraryFunction();
            }
        };

        document.head.appendChild(script);

        // Cleanup the script tag when the component is unmounted
        return () => {
            document.head.removeChild(script);
        };
    }, []); // Empty dependency array to run once when component mounts

    return (
        <GuestLayout>
            <div className="h-[60vh] w-full bg-black bg-gradient-to-t from-black from-0% to-transparent shadow-lg">
            <img src={`/storage/`+project.cover_image} alt="hero" className='w-full h-full object-cover opacity-60' />
        </div>

        <div className="px-4 sm:px-10 p-4 mt-4">
            <div className="max-w-7xl w-full mx-auto">
                <div className="">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-12 medium-zoom-demo">
                        <div className="w-full text-center">
                            <figure lg-background-color="white" className="blog-images" data-src="./images/interior-2.png"
                                data-lg-size="1600-1126">
                                <img src={`/storage/`+project.project_image} alt="Product"
                                    className="rounded object-cover w-full mx-auto" />
                            </figure>
                        </div>

                        <div className="h-full text-[#5C546C]">
                            <h2 className="text-3xl font-bold">{project.name}</h2>

                            <div className="mt-8">
                                <p className="text-xl">{project.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="px-4 sm:px-10 p-4">
            <div className="max-w-7xl w-full mx-auto">
                <div className="bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 max-lg:max-w-3xl mx-auto"
                        id="lightgallery">
                        
                        {
                            project.gallery_images.map((image, index) => (
                                <a href={`/storage/`+image} data-lg-size="800-600" key={index}>
                                    <div
                                        className="bg-white cursor-pointer rounded-lg overflow-hidden group before:inset-0 before:z-10">
                                        <img src={`/storage/`+image} alt="Blog Post 3"
                                            className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="px-4 sm:px-10 p-8">
            <div className="max-w-7xl w-full mx-auto">
                <div className="lg:max-w-7xl max-w-xl max-lg:mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-12 medium-zoom-demo">


                        <div className="h-full text-[#5C546C]">


                            <div className="mt-8 text-right">
                                <p className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.</p>
                            </div>
                        </div>

                        <div className="w-full text-center">
                            <figure lg-background-color="white" className="blog-images" data-src="./images/interior-2.png"
                                data-lg-size="1600-1126">
                                <img src="./images/interior-2.png" alt="Product" className="rounded object-cover mx-auto" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <div className="px-4 sm:px-10 p-8 ">
            <h2 className="text-3xl font-bold my-10 text-gray-800 text-center text-[#5C546C]">Similar Projects</h2>
            <div className="w-full mx-auto overflow-hidden  bg-gray-100">
                <div className="swiper-container p-6 relative">
                    <Swiper className="swiper-wrapper"
                    spaceBetween={30}
                    slidesPerView={4}
                    loop={true}
                    navigation={
                        {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }
                    }
                    pagination={
                        {
                            el: '.swiper-pagination',
                            clickable: true,
                        }
                    }
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }}
                    }
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >

                        {projects.map((project, index) => (
                            <SwiperSlide className="swiper-slide" key={index}>
                                <div
                                    className="bg-white cursor-pointer rounded-lg overflow-hidden relative group before:absolute before:inset-0 inset-0">
                                    <img src={`/storage/`+project.cover_image} alt="Blog Post 1"
                                        className="w-full h-96 object-cover group-hover:scale-110 group-hover:z-1 transition-all duration-300 " />
                                    <div
                                        className="absolute w-full -bottom-100 bg-gradient-to-t from-black from-0% to-transparent opacity-90 p-4 group-hover:bottom-0 transition-all duration-300">
                                        <h2 className="text-white font-bold text-2xl">{project.name}</h2>
                                        <p className="text-white font-light mt-2">{ project.description.slice(0, 200) + '...' }</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </div>
            <a href="#" className="text-lg block font-semibold my-10 text-center text-[#C38A32]">See all
                projects</a>
        </div>
        </GuestLayout>
    );
};

export default Home;
