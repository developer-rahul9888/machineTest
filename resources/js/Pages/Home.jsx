import React, { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import 'swiper/css'; // Import Swiper's styles
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "@inertiajs/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = ({projects}) => {


    function disableScroll() {
        document.body.classList.add("noscroll");
      }
      
      // Function to enable scrolling
      function enableScroll() {
        document.body.classList.remove("noscroll");
      }

    const animateHeroSection = () => {
    
        const tl = gsap.timeline({
          onStart: disableScroll, // Disable scroll when animation starts
          onComplete: enableScroll, // Re-enable scroll when animation completes
        });
      
        tl
          .fromTo(
            "#hero-text",
            {
              scale: 10,
              duration: 1,
              y: -100,
            },
            {
              scale: 1,
              duration: 1,
              stagger: 1,
              y: 0,
              ease: "power2.out",
            }
          )
          .from("#hero-logo", {
            opacity: 0,
            duration: 1,
          });
      };
      
      const animateHeader = () => {
        let tlHeader = gsap.timeline({
          scrollTrigger: {
            scroller: "body",
            trigger: "#hero",
            start: "20% top",
            end: "40% top",
            duration: 0.5,
            // markers: true,
            ease: "power2.out",
            pin: true, // Remove this and it SORT OF works. But I want the hero image to be frozen
            scrub: 1,
          },
        });
      
        tlHeader.to(
          "#hero-logo",
          {
            scale: 0.2,
            y: "-100vh",
            x: "-75vw",
            duration: 1,
            opacity: 0,
          },
          "logo"
        );
      
        tlHeader.fromTo(
          "#logo",
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
          "logo"
        );
      };
      
      const animateFooter = () => {
        const tlFooter = gsap.timeline({
          scrollTrigger: {
            trigger: "#footer",
            scroller: "body",
            top: "top 50%",
            end: "top 10%",
            // markers: true,
            scrub: 1,
          },
        });
      
        tlFooter.from(".footer-logo", {
          x:"-40vw",
          y: "-70vh",
          ease: "power2.out",
          delay: 1,
          duration: 1,
          opacity: 0,
        });
      
        tlFooter.to("#logo", {
          opacity: 0,
          duration: 0.5,
        }, "logo");
      
        tlFooter.from("#footerText", {
          x: "-50%",
          ease: "power2.out",
          opacity: 0,
        }, "logo");
      
      
      
        tlFooter.to("#footerText", {
          ease: "power2.out",
          opacity: 1,
          onComplete: function () {
            // Once box1 is invisible, hide it and show box2
            gsap.fromTo("#footerBtn", { opacity: 0 }, { opacity: 1, duration: 0.5 }); // Fade in box2
          },
        });
      };
      
      const animateProducts = () => {
        gsap.from("#products .group", {
          scrollTrigger: {
            trigger: "#products",
            scroller: "body",
            start: "top 50%",
            end: "top 10%",
            // markers: true,
            scrub: 1,
          },
          y: 50,
          opacity: 0,
          ease: "power2.out",
          stagger: 0.1,
        })
      }
      
    useEffect(() => {

        // Scroll to the top of the page when the component is loaded
        setTimeout(() => {
            window.scrollTo(0, 0); 
        },500)

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


        
        document.addEventListener("DOMContentLoaded", function () {
            window.scrollTo(0, 0);
          });
          
           // Function to smoothly scroll to the footer
           function scrollToFooter() {
            document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
          }
          
          function scrollToHeader() {
            document.getElementById("header").scrollIntoView({ behavior: "smooth" });
          }
          
          // Set up IntersectionObserver to detect when the footer is in view
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                scrollToFooter(); // Trigger smooth scroll when footer is in view
              }
            });
          }, {
            threshold: 0.5 // Trigger when 50% of the footer is visible
          });
          
          const observer1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                scrollToHeader(); // Trigger smooth scroll when footer is in view
              }
            });
          }, {
            threshold: 0.5 // Trigger when 50% of the footer is visible
          });
          
          // Observe the footer element
          observer.observe(document.getElementById("footer"));
          observer1.observe(document.getElementById("header"));

        animateHeader();
      animateHeroSection();
      animateFooter();
      animateProducts();

        // Cleanup the script tag when the component is unmounted
        return () => {
            document.head.removeChild(script);
        };
    }, []); // Empty dependency array to run once when component mounts

    return (
        <GuestLayout>
            <div className="h-[90vh] w-full bg-[#180f2a] text-gray-300 flex justify-center items-center" id="hero">
            <div className="text-center">
            <img src="./logo.png" id="hero-logo" alt="logo" className='w-64 mx-auto' />
            <div className="text-[2rem] font-bold text-middle" id="hero-text">Your <span className="text-[#e9ad48]"
              id="hero-success">Success</span> Partner!</div>
              </div>
        </div>

        <div className="bg-[#f5f5f5] lg:min-h-[560px] px-4 sm:px-10">
      <div className="max-w-7xl mx-auto py-16" id="products">
        <div className="max-w-2xl left-0 right-0 mx-auto w-full bg-white px-3 py-1 flex items-center rounded-md">
          <input type="email" placeholder="Search Projects"
            className="w-full text-gray-400 px-4 text-base focus:outline-none" fdprocessedid="0u4vfk" />
          <button
            className="bg-black hover:bg-[#222] text-white flex items-center transition-all font-semibold my-1 px-5 py-4"
            fdprocessedid="zpggwt">
            Search
          </button>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">

          {projects.map((project) => (
            <div key={project.id} className="bg-white cursor-pointer overflow-hidden  relative group h-64">
              <img src={`storage/`+project.project_image} alt="Blog Post 1"
                className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#fff] opacity-90">
                <div className="h-0 overflow-hidden group-hover:h-10 group-hover:mt-1 transition-all duration-300">
                  <Link href={`/project/${project.id}`} as="button"
                    className="w-full px-6 py-2 text-sm font-semibold bg-black rounded-md text-white hover:bg-[#222] transition-all" >Know
                    more</Link>
                </div>
              </div>
            </div>
          ))}

        </div>
        <button
          className='px-6 py-3.5 rounded-md text-gray-100 bg-[#a99550] hover:bg-gray-800 transition-all mt-10 flex mx-auto'>Read
          more...</button>
      </div>
    </div>
        </GuestLayout>
    );
};

export default Home;
