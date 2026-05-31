// src/components/Hero.tsx
import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white text-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        
        {/* Left Column: Text */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
            Building the Future of the Web
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
            This is a modern, responsive website built with Next.js and Tailwind CSS. It features automatic image optimization, instant routing, and a beautiful UI.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 text-base font-medium text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          {/* 
            The Image component requires width and height to prevent layout shift.
            Starting the path with "/" automatically looks in the "public" folder.
          */}
          <Image 
            src="/hero-image.jpg" 
            alt="Modern web development" 
            width={600} 
            height={400}
            className="rounded-xl object-cover shadow-lg"
            priority // Tells Next.js to load this image instantly
          />
        </div>

      </div>
    </section>
  );
}