'use client'

import { Facebook, Instagram, Mail, Phone, MapPin, Zap, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden bg-black/40 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            {/* Logo Section - Matching Header */}
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Image src="/logoAds.png" alt="logo" width={24} height={24} className="filter brightness-0 invert" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                {/* Floating dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xl font-black text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    ADS MANAGEMENT
                  </span>
                </h3>
                <p className="text-xs text-gray-400 tracking-wider">AI Digital Agency</p>
              </div>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed text-base">
              AdsManagement builds a comprehensive digital service ecosystem with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                innovative AI solutions
              </span>
              {" "}to accompany customers on their long-term growth journey and bring sustainable success.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-gray-300 text-sm leading-relaxed">
                  <div>376 Moo 15, Samprao Subdistrict</div>
                  <div>Mueang Udon Thani District</div>
                  <div>Udon Thani Province 41000, Thailand</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group hover:text-cyan-400 transition-colors duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <a href="tel:042110357" className="text-gray-300 text-sm">042110357</a>
              </div>
              
              <div className="flex items-center gap-3 group hover:text-cyan-400 transition-colors duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <a href="mailto:ceo@adsmanagements.com" className="text-gray-300 text-sm">
                ceo@adsmanagements.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Quick Links
              </span>
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '#services' },
                { name: 'About Us', href: '/about' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  {item.name === 'Home' ? (
                    <Link 
                      href={item.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></div>
                      {item.name}
                    </Link>
                  ) : (
                    <a 
                      href={item.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></div>
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Terms & Policies */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Legal
              </span>
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms of Use', href: '#' },
                { name: 'Work Policy', href: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-purple-400/50 rounded-full group-hover:bg-purple-400 transition-colors duration-300"></div>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-8">
              <button onClick={() => window.open('https://lin.ee/Ftj3GAo', '_blank')} className="group relative overflow-hidden w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 border border-cyan-400/50">
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4 group-hover:animate-bounce" />
                    <span className="tracking-wider">Start Project</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              Copyright © {new Date().getFullYear()}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                AdsManagement
              </span>
              . All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="group relative"
                aria-label="Follow us on Facebook"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Facebook className="w-4 h-4 text-blue-400" />
                </div>
              </a>
              <a 
                href="#" 
                className="group relative"
                aria-label="Follow us on Instagram"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-pink-500/30 transition-colors duration-300">
                  <Instagram className="w-4 h-4 text-pink-400" />
                </div>
              </a>
              
              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="group relative ml-2"
                aria-label="Back to top"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-all duration-300 group-hover:scale-110">
                  <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:animate-bounce" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}