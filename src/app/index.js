"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function Symposium() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 px-8 shadow-lg sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Zorphix</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#events" className="hover:underline">Events</a>
            <a href="#team" className="hover:underline">Team</a>
            <Link href="/login" className="hover:underline">Login</Link>
          </nav>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            ☰
          </button>
        </div>
        {isNavOpen && (
          <nav className="flex flex-col gap-4 mt-4 text-sm bg-purple-700 md:hidden">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#events" className="hover:underline">Events</a>
            <a href="#team" className="hover:underline">Team</a>
            <Link href="/login" className="hover:underline">Login</Link>
          </nav>
        )}
      </header>

      {/* Welcome Section */}
      <section id="home" className="text-center py-20 bg-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to Zorphix</h2>
        <p className="text-lg text-gray-600 mb-8">
          Join us for an exhilarating symposium filled with innovation, creativity, and collaboration.
        </p>
        <Image
          src="/placeholder-welcome.jpg"
          alt="Welcome image"
          width={800}
          height={400}
          className="mx-auto rounded shadow-lg"
        />
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <div className="relative h-96 overflow-hidden">
            {/* Image Slider */}
            <div className="absolute inset-0 bg-fixed bg-cover bg-center parallax-effect" style={{ backgroundImage: "url('/about-bg.jpg')" }}>
              <div className="bg-black bg-opacity-40 h-full flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white">Experience the Future</h3>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-600 mt-8">
            Zorphix is a platform for bright minds to come together and showcase their talents across various disciplines.
          </p>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Sponsor 1", "Sponsor 2", "Sponsor 3"].map((sponsor, index) => (
              <Image
                key={index}
                src="/placeholder-sponsor.jpg"
                alt={sponsor}
                width={200}
                height={100}
                className="mx-auto"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Hackathon", "Robotics Challenge", "Paper Presentation"].map((event, index) => (
              <div
                key={index}
                className="relative bg-gray-50 p-6 shadow-lg rounded-lg transition-transform duration-500 hover:scale-105"
              >
                <Image
                  src="/placeholder-event.jpg"
                  alt={event}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{event}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["AI Workshop", "Blockchain Workshop", "IoT Workshop"].map((workshop, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg transition-transform duration-500 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2">{workshop}</h3>
                <p className="text-gray-600">Learn and grow your skills in {workshop.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Events Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Previous Events</h2>
          <div className="flex overflow-x-scroll space-x-4">
            {[1, 2, 3, 4].map((year) => (
              <div key={year} className="min-w-[300px] bg-gray-100 p-4 shadow-lg rounded">
                <Image
                  src={`/placeholder-event-${year}.jpg`}
                  alt={`Event ${year}`}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="text-lg font-bold mt-4">Event {year}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center">
        <p className="text-sm">&copy; 2025 Zorphix. All rights reserved.</p>
      </footer>
    </div>
  );
}
