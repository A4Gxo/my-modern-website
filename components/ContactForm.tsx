// src/components/ContactForm.tsx
"use client"; // This is required for interactive components in the App Router

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the page from refreshing
    setStatus("Sending...");

    // Simulate sending data to a server (like an email API)
    setTimeout(() => {
      setStatus("Message sent successfully!");
      (e.target as HTMLFormElement).reset(); // Clear the form
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-screen-md space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-black focus:ring-black"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-black focus:ring-black"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">
          Your Message
        </label>
        <textarea
          id="message"
          rows={6}
          required
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-black focus:ring-black"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-black px-5 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto"
      >
        Send Message
      </button>
      
      {/* Show success/loading message if it exists */}
      {status && (
        <p className="mt-4 text-sm font-medium text-green-600">{status}</p>
      )}
    </form>
  );
}