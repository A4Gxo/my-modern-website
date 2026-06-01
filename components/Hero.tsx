// src/components/Hero.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  // --- TYPEWRITER LOGIC ---
  const headerText = "Software Engineer & Data Enthusiast";
  const bodyText = "Hi, I'm Gyanaranjan. I'm a CS student who specializes in building the modern web. Whether I am crafting fluid, animated user interfaces with Next.js and Tailwind, or analyzing complex datasets with Python and Pandas, I am passionate about engineering tools that solve real-world problems.";
  
  const [displayHeader, setDisplayHeader] = useState('');
  const [displayBody, setDisplayBody] = useState('');
  
  // State to track which element is currently typing
  const [isHeaderTyping, setIsHeaderTyping] = useState(true);
  const [isBodyTyping, setIsBodyTyping] = useState(false);

  // 1. Header Typewriter Effect
  useEffect(() => {
    let currentIndex = 0;
    if (currentIndex >= headerText.length) return;

    const intervalId = setInterval(() => {
      setDisplayHeader(headerText.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === headerText.length) {
        clearInterval(intervalId);
        setIsHeaderTyping(false); // Stop header cursor
        setIsBodyTyping(true);    // Start body typing
      }
    }, 40); // Slightly slower for the big header text

    return () => clearInterval(intervalId);
  }, []);

  // 2. Body Typewriter Effect (Waits for Header to finish)
  useEffect(() => {
    if (!isBodyTyping) return; // Don't start until triggered by the header

    let currentIndex = 0;
    if (currentIndex >= bodyText.length) return;

    const intervalId = setInterval(() => {
      setDisplayBody(bodyText.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === bodyText.length) {
        clearInterval(intervalId);
        setIsBodyTyping(false); // Stop body cursor when done
      }
    }, 25); // Faster for the longer paragraph

    return () => clearInterval(intervalId);
  }, [isBodyTyping]); // This effect depends on isBodyTyping state
  // --- END LOGIC ---

  return (
    <section className="bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        
        {/* Left Column: Text */}
        <div className="mr-auto place-self-center lg:col-span-7">
          
          {/* Dynamic Header */}
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl min-h-[96px] md:min-h-[144px]">
            {displayHeader}
            {/* Header Cursor (Only shows while header is typing) */}
            <span className={`inline-block w-[4px] h-[1em] bg-purple-600 dark:bg-cyan-400 ml-2 align-middle ${isHeaderTyping ? 'animate-pulse' : 'hidden'}`}></span>
          </h1>
          
          {/* Dynamic Paragraph */}
          <p className="mb-6 max-w-2xl font-light text-gray-500 transition-colors duration-300 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl min-h-[120px]">
            {displayBody}
            {/* Body Cursor (Only shows when body is typing OR has finished) */}
            {/* Using opacity-0 when not typing keeps the layout perfectly stable without the cursor disappearing entirely */}
            <span className={`inline-block w-[2px] h-[1.2em] bg-gray-900 dark:bg-white ml-1 align-middle transition-opacity duration-300 ${!isHeaderTyping && isBodyTyping ? 'animate-pulse opacity-100' : 'opacity-0'}`}></span>
          </p>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 text-base font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 focus:ring-4 focus:ring-gray-300 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Learn More About Me
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex lg:items-center lg:justify-center">
          <div className="relative rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 p-1.5 shadow-2xl transition-all duration-300 dark:shadow-purple-900/40">
            <Image 
              src="/hero-image.jpg" 
              alt="Gyanaranjan - Modern Web Development" 
              width={400} 
              height={400}
              className="aspect-square rounded-full border-4 border-white object-cover transition-colors duration-300 dark:border-gray-950"
              priority 
            />
          </div>
        </div>

      </div>
    </section>
  );
}