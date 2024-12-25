import React from 'react';
import { Menu } from 'lucide-react';
import NavLinks from './NavLinks';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden md:block">
            <NavLinks />
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mt-3">
            <NavLinks mobile />
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md font-sm hover:bg-blue-700 transition-colors">
              Login
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
