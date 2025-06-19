import {
  ArrowRight,
  Facebook,
  Instagram,
  Zap,
  Sparkles,
  Globe,
  Rocket,
  Star,
  Award,
  Users,
  TrendingUp,
  Cpu,
  Eye,
  Layers,
  Shield,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const partnerLogos = [
    {
      name: "Meta",
      logo: (
        <div className="">
          <Image
            src="/partner-badge.png.webp"
            alt="Meta"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
      ),
    },
    {
      name: "Google",
      logo: (
        <Image
          src="/google-partner-la-gi.jpg.webp"
          alt="Google"
          width={120}
          height={40}
          className="object-contain"
        />
      ),
    },
    {
      name: "TikTok",
      logo: (
        <div className="">
          <Image
            src="/tiktok-partner2-1.png.webp"
            alt="TikTok"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
      ),
    },
    {
      name: "LinkedIn",
      logo: (
        <div className="w-20 h-12  rounded-md flex items-center justify-center  p-2">
          <Image
            src="/Logo-01.png.webp"
            alt="LinkedIn"
            width={80}
            height={40}
            className="object-contain"
          />
        </div>
      ),
    },
    {
      name: "Shopify",
      logo: (
        <div className="w-20 h-12   rounded-md flex items-center justify-center  p-2">
          <Image
            src="/Logo-02.png.webp"
            alt="Shopify"
            width={80}
            height={40}
            className="object-contain"
          />
        </div>
      ),
    },
    {
      name: "HubSpot",
      logo: (
        <div className="w-20 h-12   rounded-md flex items-center justify-center p-2">
          <Image
            src="/Logo-03.png.webp"
            alt="HubSpot"
            width={80}
            height={40}
            className="object-contain"
          />
        </div>
      ),
    },
    {
      name: "Mailchimp",
      logo: (
        <div className="w-20 h-12   rounded-md flex items-center justify-center  p-2">
          <Image
            src="/Logo-04.png.webp"
            alt="Mailchimp"
            width={80}
            height={40}
            className="object-contain"
          />
        </div>
      ),
    },
    {
      name: "WordPress",
      logo: (
        <div className="w-20 h-12   rounded-md flex items-center justify-center  p-2">
          <Image
            src="/Logo-05.png.webp"
            alt="WordPress"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
      ),
    },
    {
      name: "Microsoft",
      logo: (
        <div className="w-20 h-12   rounded-md flex items-center justify-center  p-2">
          <Image
            src="/Logo-06.png.webp"
            alt="Microsoft"
            width={80}
            height={40}
            className="object-contain"
          />
        </div>
      ),
    }
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
              {/* Left Content - 7 columns */}
              <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left">
                {/* Futuristic Brand Badge */}
                <div className="inline-flex items-center gap-3 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl rounded-full px-4 lg:px-6 py-2 lg:py-3 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="relative">
                        <Cpu className="w-4 lg:w-5 h-4 lg:h-5 text-cyan-400" />
                        <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
                      </div>
                      <span className="text-cyan-100 font-medium text-xs lg:text-sm tracking-wider">
                        AdsManagement - AI Digital Agency
                      </span>
                      <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Holographic Main Headline */}
                <div className="space-y-4 lg:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black leading-tight tracking-tight">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white animate-pulse">
                      Optimal Marketing
                    </span>
                    <span className="block relative">
                      <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"
                        style={{ animationDuration: "2s" }}
                      >
                        Solutions
                      </span>
                      {/* Holographic glow effect */}
                      <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-sm opacity-50 -z-10">
                        Solutions
                      </div>
                    </span>
                  </h1>
                  
                  <div className="relative">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400">
                      for Every Business
                    </div>
                  </div>
                </div>

                {/* Enhanced Description with Typewriter Effect */}
                <div className="relative">
                  <p className="text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed max-w-2xl font-light tracking-wide mx-auto lg:mx-0">
                    AdsManagement builds a comprehensive digital service
                    ecosystem with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                      innovative solutions
                    </span>{" "}
                    to accompany customers on their{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                      long-term growth journey
                    </span>{" "}
                    and bring sustainable success.
                  </p>

                  {/* Glitch effect overlay */}
                  <div
                    className="absolute inset-0 text-base lg:text-lg xl:text-xl text-cyan-400/20 leading-relaxed max-w-2xl font-light tracking-wide opacity-0 animate-pulse mx-auto lg:mx-0"
                    style={{ animationDuration: "0.1s" }}
                  >
                    AdsManagement builds a comprehensive digital service
                    ecosystem with innovative solutions to accompany customers
                    on their long-term growth journey and bring sustainable
                    success.
                  </div>
                </div>

                {/* Futuristic CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <a
                    href="https://lin.ee/Ftj3GAo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden inline-block"
                  >
                    {/* Neon glow background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    
                    {/* Button content */}
                    <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-black px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 hover:scale-105 border border-cyan-400/50">
                      {/* Scanning effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <div className="relative flex items-center justify-center gap-2 lg:gap-3">
                        <Rocket className="w-4 lg:w-5 h-4 lg:h-5 group-hover:animate-bounce" />
                        <span className="tracking-wider">GET CONSULTATION</span>
                        <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href="https://lin.ee/Ftj3GAo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden inline-block"
                  >
                    {/* Glass morphism background */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-xl border border-white/20 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300"></div>
                    
                    <div className="relative text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg">
                      <div className="flex items-center justify-center gap-2 lg:gap-3">
                        <Eye className="w-4 lg:w-5 h-4 lg:h-5 group-hover:rotate-12 transition-transform" />
                        <span className="tracking-wider">Explore Services</span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Holographic Stats Dashboard */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 pt-6 lg:pt-8">
                  {[
                    {
                      icon: TrendingUp,
                      value: "10+",
                      label: "Years Experience",
                      color: "from-cyan-400 to-blue-500",
                    },
                    {
                      icon: Users,
                      value: "1250+",
                      label: "Happy Clients",
                      color: "from-purple-400 to-pink-500",
                    },
                    {
                      icon: Award,
                      value: "1250+",
                      label: "Projects Done",
                      color: "from-green-400 to-cyan-500",
                    },
                    {
                      icon: Star,
                      value: "100%",
                      label: "Satisfaction",
                      color: "from-yellow-400 to-orange-500",
                    },
                  ].map((stat, index) => (
                    <div key={index} className="text-center group relative">
                      {/* Holographic glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-lg blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                      ></div>
                      
                      <div className="relative bg-black/20 backdrop-blur-xl rounded-lg p-3 lg:p-4 border border-white/10 group-hover:border-white/30 transition-all duration-300 hover:scale-105">
                        <stat.icon
                          className={`w-5 lg:w-6 h-5 lg:h-6 mx-auto mb-1 lg:mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:animate-bounce`}
                        />
                        <div
                          className={`text-xl lg:text-2xl font-black mb-0.5 lg:mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs lg:text-xs text-gray-400 font-medium tracking-wider uppercase">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - 5 columns - Futuristic Logo Display */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                  
                  {/* Main Holographic Container */}
                  <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                    
                    {/* Outer rotating rings */}
                    <div
                      className="absolute inset-0 rounded-full border border-cyan-400/30 animate-spin"
                      style={{ animationDuration: "20s" }}
                    >
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 lg:w-3 h-2 lg:h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div
                      className="absolute inset-2 lg:inset-4 rounded-full border border-purple-400/30 animate-spin"
                      style={{
                        animationDuration: "15s",
                        animationDirection: "reverse",
                      }}
                    >
                      <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>

                    {/* Holographic glow rings */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"
                      style={{ animationDuration: "4s" }}
                    ></div>
                    <div
                      className="absolute inset-4 lg:inset-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"
                      style={{ animationDuration: "6s", animationDelay: "2s" }}
                    ></div>
                    
                    {/* Main Logo Container */}
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-black/20 backdrop-blur-2xl rounded-full border border-cyan-400/40 flex items-center justify-center group hover:scale-105 transition-all duration-700">
                      
                      {/* Scanning rings */}
                      <div
                        className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400/50 via-transparent to-cyan-400/50 animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ animationDuration: "2s" }}
                      ></div>
                      
                      {/* Logo */}
                      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:rotate-3 transition-all duration-500 border border-cyan-400/30">
                        {/* Inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 rounded-2xl lg:rounded-3xl animate-pulse"></div>
                        
                        <Image
                          src="/logoAds.png"
                          alt="AdsManagement Logo"
                          width={80}
                          height={80}
                          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain filter brightness-0 invert relative z-10"
                        />
                        
                        {/* Holographic overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-purple-400/20 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Floating Tech Icons - Responsive sizes */}
                      <div className="absolute top-4 lg:top-6 right-4 lg:right-6">
                        <div className="w-8 lg:w-12 h-8 lg:h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg lg:rounded-xl flex items-center justify-center shadow-xl animate-bounce backdrop-blur-sm border border-cyan-400/50">
                          <Facebook className="w-4 lg:w-6 h-4 lg:h-6 text-white" />
                          <div className="absolute inset-0 bg-blue-400/30 rounded-lg lg:rounded-xl animate-pulse"></div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6">
                        <div
                          className="w-8 lg:w-12 h-8 lg:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg lg:rounded-xl flex items-center justify-center shadow-xl animate-bounce backdrop-blur-sm border border-pink-400/50"
                          style={{ animationDelay: "0.5s" }}
                        >
                          <Instagram className="w-4 lg:w-6 h-4 lg:h-6 text-white" />
                          <div className="absolute inset-0 bg-pink-400/30 rounded-lg lg:rounded-xl animate-pulse"></div>
                        </div>
                      </div>
                      
                      <div className="absolute right-1 lg:right-2 top-1/2 transform -translate-y-1/2">
                        <div
                          className="w-7 lg:w-10 h-7 lg:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg lg:rounded-xl flex items-center justify-center shadow-xl animate-bounce backdrop-blur-sm border border-yellow-400/50"
                          style={{ animationDelay: "1s" }}
                        >
                          <Zap className="w-3 lg:w-5 h-3 lg:h-5 text-white" />
                          <div className="absolute inset-0 bg-yellow-400/30 rounded-lg lg:rounded-xl animate-pulse"></div>
                        </div>
                      </div>

                      <div className="absolute left-1 lg:left-2 bottom-1/3">
                        <div
                          className="w-6 lg:w-8 h-6 lg:w-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl animate-bounce backdrop-blur-sm border border-green-400/50"
                          style={{ animationDelay: "1.5s" }}
                        >
                          <Sparkles className="w-3 lg:w-4 h-3 lg:h-4 text-white" />
                          <div className="absolute inset-0 bg-green-400/30 rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      <div className="absolute top-1/3 left-4 lg:left-6">
                        <div
                          className="w-7 lg:w-10 h-7 lg:w-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl animate-bounce backdrop-blur-sm border border-cyan-400/50"
                          style={{ animationDelay: "2s" }}
                        >
                          <Globe className="w-3 lg:w-5 h-3 lg:h-5 text-white" />
                          <div className="absolute inset-0 bg-cyan-400/30 rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      {/* Additional tech elements */}
                      <div className="absolute top-1/4 right-1/4">
                        <Shield
                          className="w-3 lg:w-4 h-3 lg:h-4 text-cyan-400 animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        />
                      </div>
                      
                      <div className="absolute bottom-1/4 left-1/4">
                        <Layers
                          className="w-3 lg:w-4 h-3 lg:h-4 text-purple-400 animate-pulse"
                          style={{ animationDelay: "1.5s" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Futuristic Partners Section */}
        <div className="border-t border-cyan-400/20 bg-black/30 backdrop-blur-xl relative overflow-hidden">
          {/* Ultra-Futuristic Section Header */}
          <div className="text-center mb-12 lg:mb-16 relative px-4">
            
            {/* Background Matrix Effect */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px h-6 lg:h-8 bg-gradient-to-b from-cyan-400/40 to-transparent animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Floating Energy Particles */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-bounce opacity-60"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${3 + Math.random() * 3}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Central Holographic Badge */}
            <div className="relative inline-flex items-center gap-2 lg:gap-4 mb-6 lg:mb-8 group">
              
              {/* Outer Rotating Ring */}
              <div
                className="absolute inset-0 w-full h-full rounded-full border border-cyan-400/30 animate-spin"
                style={{ animationDuration: "15s" }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div
                  className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 w-1 lg:w-1.5 h-1 lg:h-1.5 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              {/* Inner Energy Ring */}
              <div
                className="absolute inset-1 lg:inset-2 rounded-full border border-purple-400/30 animate-spin"
                style={{
                  animationDuration: "10s",
                  animationDirection: "reverse",
                }}
              >
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-0.5 lg:w-1 h-0.5 lg:h-1 bg-pink-400 rounded-full animate-ping"></div>
              </div>

              {/* Central Holographic Glow */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
              <div
                className="absolute inset-2 lg:inset-4 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse"
                style={{ animationDuration: "6s", animationDelay: "2s" }}
              ></div>

              {/* Main Badge Content */}
              <div className="relative bg-black/60 backdrop-blur-2xl rounded-full px-4 lg:px-8 py-2 lg:py-3 border border-cyan-400/50 group-hover:border-cyan-400/80 transition-all duration-500">
                {/* Scanning Line Effect */}
                <div className="absolute inset-0 o-transparent rounded-full transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>

                <div className="relative flex items-center gap-2 lg:gap-3">
                  <div className="relative">
                    <Award className="w-4 lg:w-5 h-4 lg:h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
                    <div className="absolute -top-0.5 -right-0.5 w-1 lg:w-1.5 h-1 lg:h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  <span className="text-cyan-100 font-bold text-xs lg:text-sm tracking-[0.2em] lg:tracking-[0.3em] uppercase bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    Elite Partnerships
                  </span>

                  <div className="flex gap-1">
                    <div className="w-0.5 lg:w-1 h-0.5 lg:h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div
                      className="w-0.5 lg:w-1 h-0.5 lg:h-1 bg-purple-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="w-0.5 lg:w-1 h-0.5 lg:h-1 bg-pink-400 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Side Energy Beams */}
              <div className="absolute left-0 top-1/2 transform -translate-x-6 lg:-translate-x-8 -translate-y-1/2 w-4 lg:w-6 h-px bg-gradient-to-r from-cyan-400/60 to-transparent animate-pulse"></div>
              <div className="absolute right-0 top-1/2 transform translate-x-6 lg:translate-x-8 -translate-y-1/2 w-4 lg:w-6 h-px bg-gradient-to-l from-cyan-400/60 to-transparent animate-pulse"></div>
            </div>

            {/* Main Holographic Title */}
            <div className="relative mb-4 lg:mb-6">
              {/* Background Text Glow */}
              <div className="absolute inset-0 text-2xl lg:text-3xl xl:text-5xl font-black tracking-tight text-cyan-400/20 blur-sm animate-pulse select-none">
                Certified Partners with Industry Leaders
              </div>

              {/* Main Title */}
              <h3 className="relative text-2xl lg:text-3xl xl:text-5xl font-black tracking-tight leading-tight">
                <span className="text-white">Certified Partners with</span>
                <br />
                <span className="relative inline-block">
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse"
                    style={{ animationDuration: "3s" }}
                  >
                    Industry Leaders
                  </span>

                  {/* Holographic Underline */}
                  <div
                    className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-pulse"
                    style={{ animationDuration: "2s" }}
                  ></div>

                  {/* Floating Accent Dots */}
                  <div
                    className="absolute -top-1 lg:-top-2 -right-2 lg:-right-4 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-cyan-400 rounded-full animate-bounce opacity-60"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute -bottom-2 lg:-bottom-4 -left-1 lg:-left-2 w-1 lg:w-1.5 h-1 lg:h-1.5 bg-purple-400 rounded-full animate-bounce opacity-60"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </span>
              </h3>

              {/* Holographic Grid Lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 lg:w-32 h-24 lg:h-32 opacity-10">
                <div className="absolute inset-0 border border-cyan-400/30 rounded-lg animate-pulse"></div>
                <div
                  className="absolute inset-1 lg:inset-2 border border-purple-400/30 rounded-lg animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute inset-2 lg:inset-4 border border-pink-400/30 rounded-lg animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="relative max-w-3xl mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent rounded-lg blur-xl"></div>

              <p className="relative text-gray-300 text-base lg:text-lg font-light tracking-wide leading-relaxed">
                We maintain{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                  premium partnerships
                </span>{" "}
                with the world&apos;s leading platforms to deliver{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                  exceptional results
                </span>{" "}
                and cutting-edge solutions
              </p>

              {/* Decorative Tech Elements */}
              <div className="absolute -top-2 lg:-top-4 -left-2 lg:-left-4">
                <div
                  className="w-6 lg:w-8 h-6 lg:h-8 border border-cyan-400/30 rounded-lg rotate-45 animate-spin"
                  style={{ animationDuration: "8s" }}
                ></div>
              </div>
              <div className="absolute -bottom-2 lg:-bottom-4 -right-2 lg:-right-4">
                <div className="w-4 lg:w-6 h-4 lg:h-6 border border-purple-400/30 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 lg:w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse mt-6 lg:mt-8"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {/* Partners Layout: Clean Logos - Responsive */}
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
              
              {/* Clean Fixed Partners on Left - Mobile: Horizontal scroll, Desktop: Fixed */}
              <div className="flex gap-0 bg-white rounded-xl overflow-x-auto lg:overflow-visible w-full lg:w-auto pb-2 lg:pb-0">
                {partnerLogos.slice(0, 3).map((partner, index) => (
                  <div key={`fixed-${index}`} className="group relative flex-shrink-0">
                    {/* Subtle glow on hover only */}
                    <div className="absolute -inset-3 lg:-inset-6 bg-white rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative transition-all duration-300 hover:scale-110">
                      <div className="w-32 h-24 lg:w-48 lg:h-36 flex items-center justify-center p-2">
                        {partner.logo}
                      </div>
                      
                      {/* Partner name label on hover - Hidden on mobile */}
                      <div className="hidden lg:block absolute -bottom-8 lg:-bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/80 backdrop-blur-sm text-cyan-300 text-xs lg:text-sm font-medium px-3 lg:px-4 py-1 lg:py-2 rounded-full border border-cyan-400/30 whitespace-nowrap">
                          {partner.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clean Sliding Partners on Right - Mobile: Single row scroll, Desktop: Auto-slide */}
              <div className="flex-1 relative overflow-hidden w-full">
                
                {/* Mobile: Horizontal scroll, Desktop: Auto-slide */}
                <div className="flex animate-slide space-x-4 lg:space-x-8 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {/* First set of remaining logos */}
                  {partnerLogos.slice(3).map((partner, index) => (
                    <div
                      key={`slide-first-${index}`}
                      className="flex-shrink-0 group"
                    >
                      <div className="relative transition-all duration-300 hover:scale-105">
                        {/* Subtle glow on hover only */}
                        <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="w-24 h-18 lg:w-36 lg:h-28 flex items-center justify-center">
                          {partner.logo}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Second set for seamless loop - Desktop only */}
                  <div className="hidden lg:contents">
                    {partnerLogos.slice(3).map((partner, index) => (
                      <div
                        key={`slide-second-${index}`}
                        className="flex-shrink-0 group"
                      >
                        <div className="relative transition-all duration-300 hover:scale-105">
                          {/* Subtle glow on hover only */}
                          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <div className="w-36 h-28 flex items-center justify-center">
                            {partner.logo}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Third set for extra smooth loop - Desktop only */}
                  <div className="hidden lg:contents">
                    {partnerLogos.slice(3).map((partner, index) => (
                      <div
                        key={`slide-third-${index}`}
                        className="flex-shrink-0 group"
                      >
                        <div className="relative transition-all duration-300 hover:scale-105">
                          <div className="w-36 h-28 flex items-center justify-center">
                            {partner.logo}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Fade Gradient - Desktop only */}
              </div>
            </div>

            {/* Enhanced Stats with larger text - Responsive */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-12 mt-12 lg:mt-16 text-center">
              <div className="text-cyan-400 font-bold">
                <span className="text-white text-xl lg:text-2xl font-black">12+</span>
                <div className="text-xs lg:text-sm tracking-wider">Platform Partners</div>
              </div>
              <div className="w-px h-4 lg:h-6 bg-cyan-400/40 hidden sm:block"></div>
              <div className="text-purple-400 font-bold">
                <span className="text-white text-xl lg:text-2xl font-black">100%</span>
                <div className="text-xs lg:text-sm tracking-wider">Certified</div>
              </div>
              <div className="w-px h-4 lg:h-6 bg-cyan-400/40 hidden sm:block"></div>
              <div className="text-pink-400 font-bold">
                <span className="text-white text-xl lg:text-2xl font-black">24/7</span>
                <div className="text-xs lg:text-sm tracking-wider">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
