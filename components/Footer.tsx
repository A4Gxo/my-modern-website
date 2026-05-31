// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 text-center text-sm text-gray-500 border-t border-gray-200">
      <div className="mx-auto max-w-screen-xl px-4">
        <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}