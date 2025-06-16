import { MessageSquare, ClipboardList, FileText, Rocket, BarChart3 } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Receive Customer Requirements",
      description: "After receiving requirements, AdsManagement will provide specific consultation on strategies and appropriate communication channels for customers based on customer research, market analysis, and marketing campaign implementation timeline.",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "Build a Plan",
      description: "AdsManagement will proceed to plan and quote based on market research from AdsManagement and information provided by customers. Basic information customers need to provide: objectives, target audience, budget, implementation timeline.",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "03",
      icon: FileText,
      title: "Payment & Contract Signing",
      description: "After agreeing on terms and implementation plan, both parties will proceed with payment & contract signing to ensure rights when implementing.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      number: "04",
      icon: Rocket,
      title: "Project Implementation",
      description: "We will implement the Marketing campaign according to the established plan. At the same time, closely monitor the campaign to optimize the set metrics. Ensure the best effectiveness for customers.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      number: "05",
      icon: BarChart3,
      title: "Reporting & Acceptance",
      description: "We will monitor and report results to customers when the campaign ends. During the implementation of the plan, unforeseen issues may arise.",
      color: "from-teal-500 to-teal-600"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full animate-ping animation-delay-1000 opacity-75"></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-cyan-400 rounded-full animate-ping animation-delay-2000 opacity-75"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 text-white font-medium mb-8 border border-white/20">
            <Rocket className="w-5 h-5 text-purple-400" />
            <span>OUR PROCEDURE</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Clear and Streamlined
            </span>
            <br />
            <span className="text-white">Cooperation Process</span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We follow a proven methodology to ensure your project's success from start to finish
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Lines */}
          <div className="hidden lg:block">
            {steps.slice(0, -1).map((_, index) => (
              <div
                key={index}
                className="absolute w-px h-32 bg-gradient-to-b from-purple-400/50 to-blue-400/50"
                style={{
                  left: index % 2 === 0 ? '25%' : '75%',
                  top: `${(index + 1) * 240 - 40}px`,
                  transform: 'translateX(-50%)'
                }}
              />
            ))}
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="flex-1 max-w-lg">
                    <div className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      {/* Step Number */}
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-2xl font-bold text-white">{step.number}</span>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                        {step.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Outer glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-xl opacity-30 animate-pulse`}></div>
                      
                      {/* Icon container */}
                      <div className={`relative w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-2xl floating-animation`}>
                        <IconComponent className="w-16 h-16 text-white" />
                      </div>
                      
                      {/* Inner highlight */}
                      <div className="absolute inset-4 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-8 py-4 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <span>Ready to get started?</span>
            <Rocket className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  )
} 