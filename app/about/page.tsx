// src/components/About.tsx
import React from 'react';
 // 1. Import the Projects component

export default function About() {
  return (
    <> {/* 2. Wrap everything in a React Fragment */}
      {/* ADDED: dark:bg-gray-950 dark:text-gray-100 and transitions */}
      <section className="bg-white px-4 py-12 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-16">
          
          {/* Header, Bio & Resume Download */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-white">
              About Me
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              I am an enthusiastic and motivated student with a strong foundation in Python programming, Machine Learning, and AI fundamentals. I specialize in building and experimenting with ML models, data preprocessing, and solving complex problems. I am deeply interested in applying my technical knowledge to real-world projects and continuously contributing to innovative, AI-driven solutions.
            </p>
            
            {/* Download Resume CTA */}
            <div className="pt-4">
              <a
                href="/resume.pdf" // MUST match the filename inside your 'public' folder
                download="Gyanaranjan_Moharana_Resume.pdf" // The name the file saves as on the user's computer
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg hover:shadow-purple-500/20 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                <span>Download Resume</span>
                {/* Animated Download Icon */}
                <svg 
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Work Experience
            </h3>
            
            {/* ADDED: dark:border-gray-800 */}
            <div className="space-y-8 border-l-2 border-gray-200 pl-6 dark:border-gray-800">
              {/* Job 1 */}
              <div className="relative">
                {/* ADDED: dark:ring-gray-950 */}
                <span className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-400 ring-4 ring-white dark:ring-gray-950"></span>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Software Developer</h4>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Ed-Tech & Fleet Management Systems</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Developed and maintained web-based applications for Ed-tech platforms (LMS, assessments) and Fleet Management systems (vehicle tracking, route optimization). Built backend APIs, designed databases, and integrated machine learning automation tools to ensure scalable, user-friendly, and efficient solutions.
                </p>
              </div>

              {/* Job 2 */}
              <div className="relative">
                <span className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-500 ring-4 ring-white dark:ring-gray-950"></span>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">IoT Engineer</h4>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Aug 2025 - Oct 2025</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Designed and developed a solar-powered Smart Aeration System for water quality management. Integrated ESP32 microcontrollers, SIM800L GSM modules, and DO/pH/Turbidity sensors for real-time monitoring and remote data logging. Focused on sustainable energy use and improving aquaculture productivity.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Education
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900/50">
                <h4 className="font-bold text-gray-900 dark:text-white">BS in Data Science and Applications</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">IIT Madras • 2023 - Present</p>
                <p className="mt-2 text-sm font-medium text-purple-600 dark:text-purple-400">CGPA: 7.13</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900/50">
                <h4 className="font-bold text-gray-900 dark:text-white">B.Tech in Information Technology</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Odisha University of Technology and Research • 2023 - 2027</p>
                <p className="mt-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">CGPA: 8.4</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Technical Arsenal
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Python", "NumPy & Pandas", "TensorFlow", "Scikit-learn", 
                "Neural Networks & CNNs", "PostgreSQL & MySQL", 
                "React & Next.js", "Tailwind CSS", "ESP32 & IoT Sensors"
              ].map((skill) => (
                <span 
                  key={skill} 
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-black hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white dark:hover:text-black"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Render the Projects component right below your About section! */}
      
    </>
  );
}