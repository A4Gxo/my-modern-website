// src/components/Navbar.tsx
import Link from 'next/link';
import ThemeToggle from './ThemeToggle'; // Import the toggle

export default function Navbar() {
  return (
    // Add dark mode classes (dark:bg-gray-950, dark:border-gray-800) to the nav background
    <nav className="border-b border-gray-200 bg-white px-4 py-4 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 lg:px-6">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-xl font-bold text-gray-900 dark:text-white">
            MySite.
          </span>
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link href="/" className="font-medium text-gray-900 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="font-medium text-gray-900 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
            About
          </Link>
          <Link href="/contact" className="font-medium text-gray-900 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
            Contact
          </Link>
          
          {/* Inject the Theme Toggle here! */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}