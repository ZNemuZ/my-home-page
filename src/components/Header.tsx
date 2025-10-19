"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              MyPortfolio
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-gray-700 hover:text-gray-900 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="#about" className="block py-2 text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="#projects" className="block py-2 text-gray-700 hover:text-gray-900">
              Projects
            </Link>
            <Link href="#skills" className="block py-2 text-gray-700 hover:text-gray-900">
              Skills
            </Link>
            <Link href="#contact" className="block py-2 text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
