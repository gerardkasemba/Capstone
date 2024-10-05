// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

        {/* Logo and Brand */}
        <div className="text-lg font-bold">
          Capstone
        </div>

        {/* Quick Links */}
        <div className="flex space-x-8">
          <a href="/about" className="text-gray-400 hover:text-white">About</a>
          <a href="/help" className="text-gray-400 hover:text-white">Help</a>
          <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white">
            {/* Facebook Icon */}
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h6.25v-7H9.75v-2.75h2.5V10.5c0-2.75 1.5-4 3.75-4 1.1 0 1.75.08 2 .1V8h-1.75C15 8 14.25 8.8 14.25 9.8v1.45h3L16.5 13.75h-2v7H18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </a>
          {/* Add Twitter, Instagram, etc. */}
        </div>
      </div>
    </footer>
  );
}
