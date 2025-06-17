'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Helper function to get navigation links
  const getNavLink = (section: string) => {
    if (pathname === '/') {
      return `#${section}`
    } else {
      return `/#${section}`
    }
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10' 
        : 'bg-black/20 backdrop-blur-md border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Image src="/logoAds.png" alt="logo" width={32} height={32} className="filter brightness-0 invert" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              {/* Floating dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <h1 className="text-xl font-black text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  ADS MANAGEMENT
                </span>
              </h1>
              <p className="text-xs text-gray-400 tracking-wider">AI Digital Agency</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: getNavLink('services') },
              { name: 'About', href: '/about' },
              { name: 'Pricing', href: '/pricing'},
              { name: 'Blog', href: '/blog' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <div key={item.name} className="relative group">
                {item.name === 'Home' ? (
                  <Link 
                    href={item.href}
                    className="relative px-4 py-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium text-sm tracking-wide rounded-lg hover:bg-white/5"
                  >
                    {item.name}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ) : (
                  <a 
                    href={item.href}
                    className="relative px-4 py-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium text-sm tracking-wide rounded-lg hover:bg-white/5"
                  >
                    {item.name}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                )}
                {/* Bottom accent line */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 rounded-full"></div>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button onClick={() => window.open('https://lin.ee/Ftj3GAo', '_blank')} className="group relative overflow-hidden">
              {/* Neon glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              
              {/* Button content */}
              <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 border border-cyan-400/50">
                {/* Scanning effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative flex items-center gap-2">
                  <Zap className="w-4 h-4 group-hover:animate-bounce" />
                  <span className="tracking-wider">Start Ads</span>
                </div>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isMenuOpen ? (
                <X size={20} className="text-gray-300 group-hover:text-cyan-400 transition-colors relative z-10" />
              ) : (
                <Menu size={20} className="text-gray-300 group-hover:text-cyan-400 transition-colors relative z-10" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-black/40 backdrop-blur-xl border-t border-cyan-400/20 rounded-b-2xl border-x border-b border-white/10">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: getNavLink('services') },
                { name: 'About Us', href: getNavLink('about') },
                { name: 'Pricing', href: getNavLink('pricing') },
                { name: 'Blog', href: getNavLink('blog') },
                { name: 'Contact', href: getNavLink('contact') }
              ].map((item) => (
                <div key={item.name} className="group">
                  {item.name === 'Home' ? (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 rounded-lg hover:bg-white/5 relative"
                      onClick={toggleMenu}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative font-medium">{item.name}</span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 rounded-lg hover:bg-white/5 relative"
                      onClick={toggleMenu}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative font-medium">{item.name}</span>
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 px-4">
                <button className="w-full group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 border border-cyan-400/50">
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      <span>Start Facebook Ads</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 