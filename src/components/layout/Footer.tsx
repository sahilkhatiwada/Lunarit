import { Phone, Mail, Moon } from 'lucide-react';

const quickLinks = ['Home', 'About', 'Services', 'Products', 'Faq', 'Contact'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <Moon className="w-8 h-8 text-white" />
                <span className="text-2xl font-bold text-white">
                  Lunar I.T. Solution
                </span>
              </div>
            </div>
            <p className="text-white text-sm sm:text-base">
              Providing innovative IT solutions for modern businesses
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white hover:text-blue-200 uppercase transition-colors text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-sm sm:text-base">
                  contact@lunarit.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-sm sm:text-base">+1234567890</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-500 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-blue-100 text-sm sm:text-base">
          © {year} Lunar I.T. Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
