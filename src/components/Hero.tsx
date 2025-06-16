import { ArrowRight, Facebook, Instagram, Zap } from 'lucide-react'

export default function Hero() {
  const partnerLogos = [
    { 
      name: "Meta Business Partner", 
      logo: (
        <div className="w-20 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white/20">
          <span className="text-white font-bold text-base">Meta</span>
        </div>
      ),
      badge: "Business Partner"
    },
    { 
      name: "Google Partner", 
      logo: (
        <div className="w-20 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white/20">
          <span className="text-white font-bold text-base">Google</span>
        </div>
      ),
      badge: "Certified Partner"
    },
    { 
      name: "TikTok for Business", 
      logo: (
        <div className="w-20 h-12 bg-gradient-to-r from-black to-gray-800 rounded-xl flex items-center justify-center relative shadow-2xl border-2 border-white/20">
          <div className="w-4 h-4 bg-red-500 rounded-full absolute -top-2 -left-2 shadow-lg"></div>
          <div className="w-3 h-3 bg-cyan-400 rounded-full absolute -top-1 left-0 shadow-lg"></div>
          <span className="text-white font-bold text-sm">TikTok</span>
        </div>
      ),
      badge: "Marketing Partner"
    },
    { 
      name: "LinkedIn Marketing", 
      logo: (
        <div className="w-20 h-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white/20">
          <span className="text-white font-bold text-sm">LinkedIn</span>
        </div>
      ),
      badge: "Solutions Partner"
    },
    { 
      name: "Shopify Plus", 
      logo: (
        <div className="w-20 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white/20">
          <span className="text-white font-bold text-sm">Shopify</span>
        </div>
      ),
      badge: "Plus Partner"
    },
    { 
      name: "HubSpot", 
      logo: (
        <div className="w-20 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white/20">
          <span className="text-white font-bold text-sm">HubSpot</span>
        </div>
      ),
      badge: "Solutions Partner"
    },
    { 
      name: "Mailchimp", 
      logo: (
        <div className="w-20 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white/20">
          <span className="text-white font-bold text-sm">Mailchimp</span>
        </div>
      ),
      badge: "Partner"
    },
    { 
      name: "WordPress", 
      logo: (
        <div className="w-20 h-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white/20">
          <span className="text-white font-bold text-sm">WordPress</span>
        </div>
      ),
      badge: "Expert"
    }
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      {/* Gradient Background similar to the example */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-800/20 via-transparent to-purple-500/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl floating-animation animation-delay-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Company Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">∞</span>
              </div>
              <span>AdsManagement - Digital Marketing Agency</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Optimal Marketing Solutions
              <span className="block text-yellow-300 mt-2">for Every Business</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              AdsManagement builds a comprehensive digital service ecosystem with innovative solutions 
              to accompany customers on their long-term growth journey and bring sustainable success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-8 py-4 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 flex items-center gap-2 text-lg font-bold shadow-xl transform hover:scale-105">
                GET CONSULTATION
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white/50 text-white px-8 py-4 rounded-full hover:bg-white/10 backdrop-blur-md transition-all duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - 3D Style Character/Illustration */}
          <div className="relative flex items-center justify-center">
            {/* 3D Style Robot/Character Container */}
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* Main Character Circle */}
              <div className="w-80 h-80 bg-gradient-to-br from-white to-blue-100 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden floating-animation">
                {/* Inner Glow */}
                <div className="absolute inset-4 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full"></div>
                
                {/* Character Face/Logo */}
                <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-white text-4xl font-bold">∞</div>
                </div>

                {/* Floating Elements around Character */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg floating-animation animation-delay-200">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg floating-animation animation-delay-400">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute top-1/2 left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg floating-animation animation-delay-600">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-lg"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-400 rounded-full shadow-lg"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-lg"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Section - Enhanced Design */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-white text-2xl font-bold mb-2">Trusted by Leading Platforms</h3>
            <p className="text-white/70 text-lg">We're certified partners with industry leaders</p>
          </div>
          
          {/* First Row - Major Partners */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {partnerLogos.slice(0, 4).map((partner, index) => (
              <div key={index} className="group relative">
                {/* Card Background */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 pb-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/10 relative overflow-visible">
                  {/* Logo positioned to overflow */}
                  <div className="flex justify-center mb-6 relative -mt-12">
                    <div className="transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      {partner.logo}
                    </div>
                  </div>
                  <p className="text-white font-semibold text-sm mb-1">{partner.name}</p>
                  <p className="text-white/60 text-xs">{partner.badge}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Row - Additional Partners */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnerLogos.slice(4).map((partner, index) => (
              <div key={index + 4} className="group relative">
                {/* Card Background */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 pb-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/10 relative overflow-visible">
                  {/* Logo positioned to overflow */}
                  <div className="flex justify-center mb-6 relative -mt-12">
                    <div className="transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      {partner.logo}
                    </div>
                  </div>
                  <p className="text-white font-semibold text-sm mb-1">{partner.name}</p>
                  <p className="text-white/60 text-xs">{partner.badge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center text-white">
            <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">10+</div>
            <div className="text-white/80 font-medium">Years Experience</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">1250+</div>
            <div className="text-white/80 font-medium">Happy Clients</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">1250+</div>
            <div className="text-white/80 font-medium">Projects Done</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">100%</div>
            <div className="text-white/80 font-medium">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
} 