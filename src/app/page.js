"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { BackgroundBeams } from "./components/ui/background-beams";
import { HeroParallax } from "./components/ui/hero-parallax";
import { Carousel, Card } from "./components/ui/apple-cards-carousel";
export default function Symposium() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const DummyContent = () => {
    return (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The first rule of Apple club is that you boast about Apple club.
          </span>{" "}
          Keep a journal, quickly jot down a grocery list, and take amazing
          class notes. Want to convert those notes to text? No problem.
          Langotiya jeetu ka mara hua yaar is ready to capture every
          thought.
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
    // Add more images as needed
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
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 px-8 shadow-lg sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Zorphix</h1>
          <nav
            className={`flex gap-6 text-sm ${isMobileMenuOpen ? "block" : "hidden"} md:flex`}
          >
            <a href="#welcome" className="hover:underline">Welcome</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#events" className="hover:underline">Events</a>
            <a href="#workshop" className="hover:underline">Workshops</a>
            <a href="#carousel" className="hover:underline">Gallery</a>
            <Link href="/login" className="hover:underline">Login</Link>
          </nav>
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
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">Welcome to Zorphix</h2>
          <p className="text-lg mb-8">
            Join us for an exhilarating symposium filled with innovation,
            creativity, and collaboration.
          </p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-1 pointer-events-none"></div>
      </section>

      {/* Background Beams for All Sections After About */}
      <div className="relative">
        <BackgroundBeams />
        {/* About Us Section */}
        <section
          id="about"
          className="relative py-20 bg-gradient-to-b from-purple-600 via-blue-500 to-blue-700 text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-blue-500 to-blue-700 opacity-50 blur-sm z-0"></div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
            <HeroParallax products={products} />
          </div>
        </section>

        {/* Events Section */}
        <section
          id="events"
          className="relative py-20 bg-gradient-to-b from-blue-700 via-blue-500 to-purple-600 text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700 via-blue-500 to-purple-600 opacity-50 blur-sm z-0"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[ "Hackathon", "Robotics Challenge", "Paper Presentation", "Startup Pitch", "Gaming Competition", "Coding Contest"].map((event, index) => (
                <div
                  key={index}
                  className="relative bg-white p-6 shadow-lg rounded-lg border-4 border-transparent transition-transform duration-500 hover:scale-105 hover:border-4 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
                >
                  <Image
                    src="/scam2.png"
                    alt={event}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{event}</h3>
                  <p className="text-gray-600">Hover for details</p>
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
          className="relative py-20 bg-gradient-to-b from-purple-500 via-blue-600 to-blue-700 text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500 via-blue-600 to-blue-700 opacity-50 blur-sm z-0"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Workshops</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[ "AI & ML Workshop", "Blockchain Fundamentals", "UI/UX Design Principles"].map((workshop, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
                >
                  <h3 className="text-xl font-bold mb-4">{workshop}</h3>
                  <p className="text-sm">
                    Learn cutting-edge skills and enhance your career!
                  </p>
                  <button className="mt-4 bg-blue-500 bg-opacity-20 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:scale-110 hover:bg-opacity-40">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Carousel */}
        <section
          id="carousel"
          className="relative py-20 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-700 text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-700 opacity-50 blur-sm z-0"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Gallery</h2>
            <div className="w-full">
              <Carousel items={data.map((card, index) => <Card key={card.src} card={card} index={index} />)} />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center">
        <p>© 2025 Zorphix. All rights reserved.</p>
      </footer>
    </div>
  );
}
