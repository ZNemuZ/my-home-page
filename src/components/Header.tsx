'use client';

import { useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import NavLink from './Header/NavLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center text-2xl font-bold text-gray-900">
            MyPortfolio
          </div>

          <nav className="hidden md:flex space-x-8">
            <NavLink name="Home" link="home" />
            <NavLink name="About" link="about" />
            <NavLink name="Projects" link="projects" />
            <NavLink name="Skills" link="skills" />
            <NavLink name="Contact" link="contact" />
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <IconX className="h-6 w-6" />
            ) : (
              <IconMenu2 className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <NavLink name="Home" link="home" />
            <NavLink name="About" link="about" />
            <NavLink name="Projects" link="projects" />
            <NavLink name="Skills" link="skills" />
            <NavLink name="Contact" link="contact" />
          </nav>
        )}
      </div>
    </header>
  );
}
