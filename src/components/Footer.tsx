import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center glow-effect">
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gradient-light">AdsManagement</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AdsManagement builds a comprehensive digital service ecosystem with innovative solutions 
              to accompany customers on their long-term growth journey and bring sustainable success.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>376 Moo 15, Samprao Subdistrict</div>
                  <div>Mueang Udon Thani District</div>
                  <div>Udon Thani Province 41000, Thailand</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">0792116879</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">hello@adsmanagement.co.th</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Terms & Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Terms & Policies</h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  Work Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © {new Date().getFullYear()} AdsManagement. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition duration-300 flex items-center space-x-2"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm">Facebook</span>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition duration-300 flex items-center space-x-2"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Add this style for the light gradient text
const style = `
.text-gradient-light {
  background: linear-gradient(135deg, #DDD6FE 0%, #C084FC 50%, #A855F7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`

// Inject the style
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.textContent = style
  document.head.appendChild(styleElement)
}