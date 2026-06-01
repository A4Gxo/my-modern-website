// src/components/ContactForm.tsx
"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setStatus("Sending...");

    // Simulate sending data to a server
    setTimeout(() => {
      setStatus("Message sent successfully!");
      (e.target as HTMLFormElement).reset(); // Clear the form
      
      // Clear the success message after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <section className="bg-gray-50 px-4 py-16 transition-colors duration-300 dark:bg-gray-900/50 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Let's Build Something
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500 dark:text-gray-400">
            Whether you have a job opportunity, a freelance project, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl shadow-purple-500/5 transition-colors duration-300 dark:bg-gray-900 dark:shadow-purple-900/10 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-gray-800 dark:bg-gray-950 dark:text-white dark:focus:border-cyan-400"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-gray-800 dark:bg-gray-950 dark:text-white dark:focus:border-cyan-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Category Dropdown */}
            {/* Category Dropdown */}
          <div>
            <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
              Inquiry Type
            </label>
            <select
              id="category"
              required
              defaultValue=""
              className="block w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-cyan-400 dark:focus:ring-cyan-400"
            >
              <option value="" disabled>Select an option...</option>
              <option value="job">Job Opportunity</option>
              <option value="freelance">Freelance Project</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                rows={5}
                required
                className="mt-2 w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-gray-800 dark:bg-gray-950 dark:text-white dark:focus:border-cyan-400"
                placeholder="How can we work together?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-900 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Send Message
            </button>

            {/* Dynamic Status Text */}
            {status && (
              <p className={`mt-4 text-center text-sm font-medium ${status === "Sending..." ? "text-cyan-600 dark:text-cyan-400" : "text-green-600 dark:text-green-400"}`}>
                {status}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}