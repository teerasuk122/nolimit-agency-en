import { MessageSquare, ClipboardList, FileText, Rocket, BarChart3, Sparkles, Zap, ArrowRight } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Receive Customer Requirements",
      description: "After receiving requirements, AdsManagement will provide specific consultation on strategies and appropriate communication channels for customers based on customer research, market analysis, and marketing campaign implementation timeline.",
      gradient: "from-cyan-400 to-blue-600",
      glowColor: "cyan"
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "Build a Strategic Plan",
      description: "AdsManagement will proceed to plan and quote based on market research from AdsManagement and information provided by customers. Basic information customers need to provide: objectives, target audience, budget, implementation timeline.",
      gradient: "from-purple-400 to-pink-600",
      glowColor: "purple"
    },
    {
      number: "03",
      icon: FileText,
      title: "Payment & Contract Signing",
      description: "After agreeing on terms and implementation plan, both parties will proceed with payment & contract signing to ensure rights when implementing with full transparency and security.",
      gradient: "from-green-400 to-emerald-600",
      glowColor: "emerald"
    },
    {
      number: "04",
      icon: Rocket,
      title: "AI-Powered Implementation",
      description: "We will implement the Marketing campaign according to the established plan. At the same time, closely monitor the campaign to optimize the set metrics using advanced AI analytics. Ensure the best effectiveness for customers.",
      gradient: "from-orange-400 to-red-600",
      glowColor: "orange"
    },
    {
      number: "05",
      icon: BarChart3,
      title: "Reporting & Optimization",
      description: "We will monitor and report results to customers when the campaign ends with comprehensive analytics dashboard. During the implementation of the plan, we provide real-time optimization and adjustments.",
      gradient: "from-indigo-400 to-purple-600",
      glowColor: "indigo"
    }
  ]

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-20">
          {/* Futuristic Badge */}
          <div className="relative inline-flex items-center gap-3 mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-black/40 backdrop-blur-xl rounded-full px-6 py-3 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Rocket className="w-5 h-5 text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className="text-cyan-100 font-medium text-sm tracking-wider uppercase">Our Process</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            <span className="block">Clear and Streamlined</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Cooperation Process
            </span>
          </h3>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We follow a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
              proven methodology
            </span>
            {" "}to ensure your project&apos;s success from start to finish
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Lines for Desktop */}
          <div className="hidden lg:block">
            {steps.slice(0, -1).map((_, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: index % 2 === 0 ? '25%' : '75%',
                  top: `${(index + 1) * 280 - 60}px`,
                  transform: 'translateX(-50%)'
                }}
              >
                <div className="w-px h-20 bg-gradient-to-b from-cyan-400/30 to-purple-400/30"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-16 lg:space-y-20">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0
              
              return (
                <div 
                  key={index} 
                  className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Content Card */}
                  <div className="flex-1 max-w-lg group">
                    {/* Holographic glow */}
                    
                    <div className="relative bg-black/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/30 transition-all duration-500 hover:scale-105">
                      {/* Scanning line effect */}
                      
                      {/* Step Number */}
                      <div className="flex items-center mb-6 relative">
                        <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center shadow-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-2xl font-bold text-white">{step.number}</span>
                        </div>
                        <div className={`h-px flex-1 bg-gradient-to-r ${step.gradient} opacity-30`}></div>
                        
                        {/* AI Badge */}
                        <div className="flex items-center gap-2 ml-4">
                          <Sparkles className={`w-4 h-4 text-${step.glowColor}-400`} />
                          <span className={`text-xs text-${step.glowColor}-400 font-medium tracking-wider uppercase opacity-60`}>
                            AI Enhanced
                          </span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h4 className={`text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${step.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                        {step.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed text-lg transition-colors duration-300">
                        {step.description}
                      </p>

                      {/* Bottom accent line */}
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-20 h-0.5 bg-gradient-to-r ${step.gradient} transition-all duration-500 rounded-full`}></div>
                      
                      {/* Corner accents */}
                      <div className={`absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-${step.glowColor}-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className={`absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-${step.glowColor}-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 group">
                    <div className="relative">
                      {/* Outer glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-full blur-2xl opacity-30 group-hover:opacity-50 animate-pulse transition-opacity duration-300`}></div>
                      
                      {/* Icon container */}
                      <div className={`relative w-32 h-32 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-16 h-16 text-white" />
                      </div>
                      
                      {/* Inner highlight */}
                      <div className="absolute inset-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300"></div>
                      
                      {/* Floating dots */}
                      <div className={`absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r ${step.gradient} rounded-full animate-pulse opacity-60`}></div>
                      <div className={`absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r ${step.gradient} rounded-full animate-pulse opacity-40`} style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 text-gray-400 text-lg">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
              <span className="px-4">Ready to start your digital transformation?</span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
            </div>
            <a href="https://lin.ee/Ftj3GAo" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 border border-cyan-400/50">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 group-hover:animate-bounce" />
                  <span className="tracking-wider">Let&apos;s Begin</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 