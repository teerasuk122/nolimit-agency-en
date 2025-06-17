import { Globe, Share2, Search, Facebook, Sparkles, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Facebook,
      title: "Facebook Ads",
      description: "Strategic Facebook advertising campaigns to reach your target audience and drive conversions with AI-powered optimization.",
      number: "01",
      gradient: "from-blue-400 to-blue-600",
      glowColor: "blue"
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Modern, responsive websites that showcase your brand and drive business growth with cutting-edge technology.",
      number: "02",
      gradient: "from-cyan-400 to-purple-600",
      glowColor: "cyan"
    },
    {
      icon: Search,
      title: "SEO Audits & Strategy",
      description: "Comprehensive SEO strategies to improve your search rankings and organic traffic using advanced analytics.",
      number: "03",
      gradient: "from-green-400 to-emerald-600",
      glowColor: "emerald"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Complete social media management to build your brand presence across all platforms with automated systems.",
      number: "04",
      gradient: "from-pink-400 to-purple-600",
      glowColor: "pink"
    }
  ]

  return (
    <section id="services" className="py-16 lg:py-24 relative overflow-hidden bg-black/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16">
          {/* Futuristic Badge */}
          <div className="relative inline-flex items-center gap-3 mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-black/40 backdrop-blur-xl rounded-full px-6 py-3 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className="text-cyan-100 font-medium text-sm tracking-wider uppercase">Our Services</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            <span className="block">Comprehensive Digital</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Solutions
            </span>
          </h3>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Powered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
              cutting-edge technology
            </span>
            {" "}and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
              data-driven insights
            </span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Holographic glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-all duration-500 hover:scale-105">
                  {/* Scanning line effect */}
                  
                  {/* Content Layout */}
                  <div className="flex items-start gap-6">
                    {/* Icon Container */}
                    <div className="flex-shrink-0 relative">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      {/* Icon glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      
                      {/* Floating dots */}
                      <div className={`absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full animate-pulse opacity-60`}></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 relative">
                      {/* Service Number */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} opacity-60`}>
                          {service.number}
                        </span>
                        <div className={`flex-1 h-px bg-gradient-to-r ${service.gradient} opacity-30`}></div>
                      </div>

                      {/* Title */}
                      <h4 className={`text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${service.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                        {service.title}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed text-sm lg:text-base transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Tech Badge */}
                      <div className="flex items-center gap-2 mt-4">
                        <Sparkles className={`w-4 h-4 text-${service.glowColor}-400`} />
                        <span className={`text-xs text-${service.glowColor}-400 font-medium tracking-wider uppercase opacity-60`}>
                          AI Powered
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-gradient-to-r ${service.gradient} transition-all duration-500 rounded-full`}></div>
                  
                  {/* Corner accents */}
                  <div className={`absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-${service.glowColor}-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className={`absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-${service.glowColor}-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
              <span className="px-4">Ready to transform your digital presence?</span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
            </div>
            <a href="https://lin.ee/Ftj3GAo" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 border border-cyan-400/50">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 group-hover:animate-bounce" />
                  <span className="tracking-wider">Get Started</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 