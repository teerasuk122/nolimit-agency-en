'use client'

import { useState } from 'react'
import { Menu, X, Facebook } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Helper function to get navigation links
  const getNavLink = (section: string) => {
    if (pathname === '/') {
      return `#${section}`
    } else {
      return `/#${section}`
    }
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center glow-effect">
              <Facebook className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gradient">AdsManagement</h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-purple-600 transition duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={getNavLink('services')} className="text-gray-700 hover:text-purple-600 transition duration-300 font-medium relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={getNavLink('about')} className="text-gray-700 hover:text-purple-600 transition duration-300 font-medium relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={getNavLink('pricing')} className="text-gray-700 hover:text-purple-600 transition duration-300 font-medium relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={getNavLink('blog')} className="text-gray-700 hover:text-purple-600 transition duration-300 font-medium relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={getNavLink('contact')} className="text-gray-700 hover:text-purple-600 transition duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="gradient-bg text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-semibold glow-effect-hover">
              Start Facebook Ads
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-purple-100">
              <a
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href={getNavLink('services')}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition duration-300"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href={getNavLink('about')}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition duration-300"
                onClick={toggleMenu}
              >
                About Us
              </a>
              <a
                href={getNavLink('pricing')}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition duration-300"
                onClick={toggleMenu}
              >
                Pricing
              </a>
              <a
                href={getNavLink('blog')}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition duration-300"
                onClick={toggleMenu}
              >
                Blog
              </a>
              <a
                href={getNavLink('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition duration-300"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 