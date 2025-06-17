import { Network, Lightbulb, Users, FileText, Sparkles } from 'lucide-react'

export default function Values() {
  const values = [
    {
      icon: Network,
      title: "Ecosystem & Resources",
      description: "Nolimit builds a comprehensive digital service ecosystem, serving as a strategic partner of platforms. We are ready to accompany customers on their long-term growth journey.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Lightbulb,
      title: "Technology - Innovation",
      description: "Nolimit applies technology to system management, helping customers easily use, track progress, and get comprehensive service reports to optimize cumbersome machinery.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Users,
      title: "Relationships - Customers",
      description: "Nolimit is not just a business partner, but also a companion unit. We always put customer interests first.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: FileText,
      title: "Reporting - Reconciliation",
      description: "Nolimit always provides accurate and optimal reports. We alert potential fluctuations that may arise, helping customers take timely countermeasures.",
      color: "from-yellow-400 to-orange-500"
    }
  ]

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-black/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16">
          {/* Futuristic Badge */}
          <div className="relative inline-flex items-center gap-3 mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-black/40 backdrop-blur-xl rounded-full px-6 py-3 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className="text-cyan-100 font-medium text-sm tracking-wider uppercase">Our Values</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            <span className="block">AdsManagement</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Core Values
            </span>
          </h3>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Built on the foundation of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
              innovation
            </span>
            {" "}and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
              excellence
            </span>
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Holographic glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-all duration-500 hover:scale-105">
                  {/* Scanning line effect */}
                  <div className="absolute inset-0  to-transparent rounded-2xl transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Icon glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    
                    {/* Floating dots */}
                    <div className={`absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r ${value.color} rounded-full animate-pulse opacity-60`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative text-center">
                    <h4 className={`text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${value.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {value.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed text-sm lg:text-base transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-gradient-to-r ${value.color} transition-all duration-500 rounded-full`}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom accent */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
            <span className="px-4">Driving Digital Excellence</span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 