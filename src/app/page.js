"use client";

import Image from "next/image";
import React, { useState ,useEffect } from "react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { BackgroundBeams } from "./components/ui/background-beams";
import { HeroParallax } from "./components/ui/hero-parallax";
import { Carousel, Card } from "./components/ui/apple-cards-carousel";

export default function Symposium() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-02-06T00:00:00"); // Set event date here
    const currentTime = new Date();
    const timeDifference = eventDate - currentTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const DummyContent = () => {
    return (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The first rule of Apple club is that you boast about Apple club.
          </span>{" "}
          
        </p>
        <Image
          src="https://assets.aceternity.com/macbook.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    );
  };

  const data = [
    {
      category: "Nature",
      title: "Beautiful Landscape 1",
      src: "/stock.jpg",  // Replaced with local image
      content: <DummyContent />,
    },
    {
      category: "Nature",
      title: "Beautiful Landscape 1",
      src: "/scam3.jpg",  // Replaced with local image
      content: <DummyContent />,
    },
    {
      category: "Nature",
      title: "Beautiful Landscape 1",
      src: "/scam.jpg",  // Replaced with local image
      content: <DummyContent />,
    },
    {
      category: "Nature",
      title: "Beautiful Landscape 1",
      src: "/scam.jpg",  // Replaced with local image
      content: <DummyContent />,
    },
    {
      category: "Urban",
      title: "Urban Skyline 2",
      src: "/scam2.png",  // Replaced with local image
      content: <DummyContent />,
    },
    {
      category: "Adventure",
      title: "Adventure Awaits 3",
      src: "/scam3.jpg",  // Replaced with local image
      content: <DummyContent />,
    },
  ];

  const products = [
    {
      title: "About Zorphix",
      link: "#about",
      thumbnail: "/stock.jpg", // Replaced with local image
    },
    {
      title: "Our Mission",
      link: "#mission",
      thumbnail: "/scam2.png", // Replaced with local image
    },
    {
      title: "Innovation & Creativity",
      link: "#innovation",
      thumbnail: "/scam3.jpg", // Replaced with local image
    },
    {
      title: "Workshops & Events",
      link: "#workshops",
      thumbnail: "/scam4.jpg", // Replaced with local image
    },
    {
      title: "Join Us",
      link: "#join",
      thumbnail: "/stock.jpg", // Replaced with local image
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 bg-opacity-50 text-white">
      {/* Navbar */}
      <header className="bg-dark-blue text-blue-500 text-glow py-6 px-4 shadow-lg sticky top-0 z-50">
  <div className="flex justify-between items-center max-w-4xl mx-auto">
    {/* Logo Section */}
    <div className="flex items-center">
      <div className="mr-10 ml-3">
        <Image
          src="/cit.png" // Replace with your logo path
          alt="CLG Logo"
          width={100} // Adjust width as needed
          height={100} // Adjust height as needed
          className="object-contain"
        />
      </div>
      
    </div>

    {/* Navigation Links */}
    <nav
      className={`flex gap-10 text-sm ${isMobileMenuOpen ? "block" : "hidden"} md:flex`}
    >
      <a href="#welcome" className="hover:underline text-white">
        Welcome
      </a>
      <a href="#about" className="hover:underline text-white">
        About
      </a>
      <a href="#events" className="hover:underline text-white">
        Events
      </a>
      <a href="#workshop" className="hover:underline text-white">
        Workshops
      </a>
      <a href="#carousel" className="hover:underline text-white">
        Gallery
      </a>
      <Link href="/login" className="hover:underline text-white">
        Login
      </Link>
    </nav>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-white"
      onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
    >
      <span className="block w-6 h-1 bg-white mb-1"></span>
      <span className="block w-6 h-1 bg-white mb-1"></span>
      <span className="block w-6 h-1 bg-white"></span>
    </button>
  </div>
</header>


      {/* Welcome Section */}
      <section
        id="welcome"
        className="relative text-center py-20 h-screen bg-black text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/1M10LMFRrINdJ3xQ/scene.splinecode" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <Image
            src="/zologo.png" // Replace with the path to your first image
            alt="Zorphix Logo"
            width={200}
            height={200}
            className="object-contain mb-6 pointer-events-none"
          />
          <Image
            src="/zo.png" // Replace with the path to your second image
            alt="Zorphix Logo"
            width={200}
            height={200}
            className="object-contain pointer-events-none"
          />
        <div className="relative z-10">

        </div>
        <div className="relative z-10 mt-8">
          <div className="max-w-3xl mx-auto p-6 rounded-3xl bg-white bg-opacity-10 backdrop-blur-md text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Time Left until Event</h3>
            <div className="grid grid-cols-4 gap-4 justify-center items-center text-white">
              {/* Days */}
              <div className="flex flex-col items-center p-4 rounded-xl backdrop-blur-md">
                <span className="text-5xl font-bold">{timeLeft.days}</span>
                <span className="text-sm">Days</span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center p-4 rounded-xl backdrop-blur-md">
                <span className="text-5xl font-bold">{timeLeft.hours}</span>
                <span className="text-sm">Hours</span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center p-4 rounded-xl backdrop-blur-md">
                <span className="text-5xl font-bold">{timeLeft.minutes}</span>
                <span className="text-sm">Minutes</span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center p-4 rounded-xl backdrop-blur-md">
                <span className="text-5xl font-bold">{timeLeft.seconds}</span>
                <span className="text-sm">Seconds</span>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 z-1 pointer-events-none"></div>
      </section>

      {/* Background Beams for All Sections After About */}
      <div className="relative">
        <BackgroundBeams />
        {/* About Us Section */}
        <section
          id="about"
          className="relative py-20 bg-gradient-to-b from-darkblue-700 via-blue-500 to-blue-700 text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-darkblue-700 via-blue-500 to-blue-700 opacity-50 blur-sm z-0"></div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
            <HeroParallax products={products} />
          </div>
        </section>

        {/* Events Section with Glass Door Effect */}
        <section
          id="events"
          className="relative py-20 bg-gradient-to-r from-darkblue-600 to-black text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-darkblue-600 to-black opacity-50 blur-sm z-0"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Hackathon", "Robotics Challenge", "Paper Presentation", "Startup Pitch", "Gaming Competition", "Coding Contest"].map((event, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-r from-purple-600 to-blue-600 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg border border-transparent backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:border-4 hover:border-white hover:bg-opacity-30"
                >
                  <Image
                    src="/scam2.png"
                    alt={event}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{event}</h3>
                  <p className="text-gray-600">Hover for more info</p>
                  <div className="opacity-0 hover:opacity-100 transition-all duration-300 absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center rounded-lg text-center text-white p-4">
                    <p>Event details coming soon! Stay tuned.</p>
                  </div>
                  <button className="mt-4 bg-blue-500 bg-opacity-20 text-white font-bold px-4 py-2 rounded-lg shadow-lg transition-transform hover:scale-110 hover:bg-opacity-40">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Section */}
        <section
          id="workshop"
          className="relative py-20 bg-gradient-to-r from-darkblue-600 to-black text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-darkblue-600 to-black opacity-50 blur-sm z-0"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Workshops</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["AI & ML Workshop", "Blockchain Fundamentals", "UI/UX Design Principles"].map((workshop, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-500"
                >
                  <h3 className="text-xl font-bold mb-4">{workshop}</h3>
                  <p className="text-lg">Sign up for hands-on learning experiences.</p>
                  <button className="mt-4 bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition-transform hover:scale-110">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="team" className="py-20 bg-gradient-to-r from-darkblue-600 to-black">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {["John Doe", "Jane Smith", "Alice Johnson"].map((name, index) => (
        <div
          key={index}
          className="p-6 bg-gray-500 shadow-lg rounded text-center transition-transform duration-500 hover:rotate-3 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:animate-pulse transform">
          <Image
            src="https://via.placeholder.com/150" // Test image URL
            alt={`${name} profile`}
            width={150}
            height={150}
            className="mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm">Event Coordinator</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section
          id="carousel"
          className="relative py-20 bg-gradient-to-r from-darkblue-600 to-black text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-darkblue-600 to-black opacity-50 blur-sm z-0"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Gallery</h2>
            <div className="w-full">
              <Carousel items={data.map((card, index) => <Card key={card.src} card={card} index={index} />)} />
            </div>
          </div>
        </section>
      </div>


        {/* Footer Section */}
       <footer className="bg-gradient-to-r from-gray-800 to-black py-8 text-white text-center relative">
  <p>&copy; 2025 Zorphix. All rights reserved.</p>

  {/* WhatsApp Floating Button */}
  <a
    href="https://wa.me/<your_phone_number>?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Zorphix."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-12 right-6 bg-green-500 text-white rounded-full p-6 shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
    aria-label="Contact us on WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.092.524 4.075 1.515 5.84L0 24l6.272-1.485C8.03 23.475 10.01 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.888 0-3.754-.482-5.376-1.396l-.385-.215-3.724.881.791-3.581-.246-.382A9.933 9.933 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.703-7.26c-.315-.158-1.863-.922-2.153-1.027-.29-.106-.502-.158-.714.158s-.822 1.027-1.008 1.24c-.184.215-.37.238-.685.08-.315-.158-1.33-.49-2.533-1.563-.937-.833-1.566-1.86-1.752-2.175-.184-.316-.02-.486.137-.644.14-.138.315-.37.472-.554.16-.184.213-.317.32-.53.106-.215.053-.398-.026-.555-.079-.158-.714-1.729-.978-2.368-.256-.613-.514-.529-.714-.539l-.604-.01c-.21 0-.555.08-.845.398s-1.11 1.086-1.11 2.647c0 1.561 1.14 3.075 1.298 3.29.158.215 2.242 3.43 5.43 4.808 2.732 1.147 3.293.918 3.884.865.592-.053 1.863-.759 2.125-1.49.263-.73.263-1.354.184-1.49-.079-.138-.29-.22-.604-.377z" />
    </svg>
  </a>
</footer>

      </div>
    
  );
}
