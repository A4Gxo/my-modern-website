// src/components/Projects.tsx
import React from 'react';

const projectsData = [
  {
    title: 'Voice-Guided Object Detection',
    description: 'Built a navigation assistant using YOLOv8, mathematical depth estimation, and multithreading for real-time obstacle detection and audio feedback, achieving 20 FPS processing.',
    techStack: ['Python', 'YOLOv8', 'Computer Vision', 'Multithreading'],
    githubLink: 'https://github.com/A4Gxo/voice_guided_object_detection', // Replace with your actual GitHub repo link
    liveLink: '',    // Leave empty if there is no live demo
  },
  {
    title: 'Disaster Detection AI System',
    description: 'Developed an AI-driven model leveraging Convolutional Neural Networks (CNNs) and IoT sensors to identify and map disaster zones, improving rapid response analysis by 92%.',
    techStack: ['Python', 'CNNs', 'Deep Learning', 'Data Mapping'],
    githubLink: 'https://github.com/A4Gxo/disaster-response-ai',
    liveLink: '',
  },
  {
    title: 'Student Attendance System (SAMS)',
    description: 'Developed a comprehensive tracking system featuring a React (Vite) frontend and a Python/FastAPI backend, automating database records and tracking for university students.',
    techStack: ['React (Vite)', 'FastAPI', 'Python', 'PostgreSQL'],
    githubLink: 'https://github.com/A4Gxo/sams-frontend',
    liveLink: 'https://sams-frontend-azure.vercel.app/',
  },
  {
    title: 'Smart Aquaculture System',
    description: 'An automated water supply and quality management system built using ESP32 microcontrollers and IoT sensors, reducing manual intervention by 70%.',
    techStack: ['ESP32', 'C++', 'IoT Sensors', 'Automation'],
    githubLink: '#',
    liveLink: '', 
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 px-4 py-16 transition-colors duration-300 dark:bg-gray-900/50 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 transition-colors duration-300 dark:text-white sm:text-4xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 transition-colors duration-300 dark:text-gray-400">
            A selection of projects that showcase my ability to build across the stack—from IoT hardware integration to scalable web applications and advanced machine learning models.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col justify-between rounded-2xl border border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-purple-900/20 sm:p-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                  {project.title}
                </h3>
                <p className="mt-4 leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-300">
                  {project.description}
                </p>
                
                {/* Tech Stack Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="rounded-md bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 transition-colors duration-300 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:border-black hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700"
                  >
                    {/* Minimal GitHub SVG Icon */}
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Code
                  </a>
                )}
                
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300 dark:focus:ring-gray-700"
                  >
                    View Live
                    {/* External Link SVG Icon */}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}