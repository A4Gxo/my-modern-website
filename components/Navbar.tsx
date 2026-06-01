// src/components/Navbar.tsx
import Link from 'next/link';
import ThemeToggle from './ThemeToggle'; // Import the toggle

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white px-4 py-4 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 lg:px-6">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        
        {/* Logo area */}
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
            Gyanaranjan.
          </span>
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="font-medium text-gray-900 transition-colors duration-300 hover:text-cyan-600 dark:text-gray-200 dark:hover:text-cyan-400">
            Home
          </Link>
          
          <Link href="/about" className="font-medium text-gray-900 transition-colors duration-300 hover:text-cyan-600 dark:text-gray-200 dark:hover:text-cyan-400">
            About
          </Link>
          
          {/* --- NEW: Projects Link --- */}
          <Link href="/projects" className="font-medium text-gray-900 transition-colors duration-300 hover:text-cyan-600 dark:text-gray-200 dark:hover:text-cyan-400">
            Projects
          </Link>
          
          <Link href="/contact" className="font-medium text-gray-900 transition-colors duration-300 hover:text-cyan-600 dark:text-gray-200 dark:hover:text-cyan-400">
            Contact
          </Link>
          
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}