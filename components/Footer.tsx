// src/components/Footer.tsx
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa'; // We bring in FontAwesome for Discord!

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-8 text-center text-sm text-gray-500 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 sm:flex-row">
        
        {/* Updated to your name! */}
        <p className="mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Gyanaranjan Moharana. Built with Next.js.</p>
        
        {/* Social Icons */}
        <div className="flex items-center space-x-6">
          {/* GitHub */}
          <a href="https://github.com/A4Gxo" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-black dark:hover:text-white">
            <span className="sr-only">GitHub</span>
            <FiGithub className="h-5 w-5" />
          </a>
          
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/a4gyanaranjan" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
            <span className="sr-only">LinkedIn</span>
            <FiLinkedin className="h-5 w-5" />
          </a>
          
          {/* Instagram */}
          <a href="https://instagram.com/a4g.gyanaranjan" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-pink-600 dark:hover:text-pink-400">
            <span className="sr-only">Instagram</span>
            <FiInstagram className="h-5 w-5" />
          </a>
          
          {/* Discord - Don't forget to swap YOUR_DISCORD_ID below! */}
          <a href="https://discord.com/users/YOUR_DISCORD_ID" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
            <span className="sr-only">Discord</span>
            <FaDiscord className="h-5 w-5" />
          </a>
          
          {/* Gmail (Mailto link) */}
          <a href="mailto:gyanaranjanmoharana97@gmail.com" className="transition-colors hover:text-red-500 dark:hover:text-red-400">
            <span className="sr-only">Email</span>
            <FiMail className="h-5 w-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}