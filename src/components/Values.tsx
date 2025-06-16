
import { Network, Lightbulb, Users, FileText } from 'lucide-react'

export default function Values() {
  const values = [
    {
      icon: Network,
      title: "Ecosystem & Resources",
      description: "Nolimit builds a comprehensive digital service ecosystem, serving as a strategic partner of platforms. We are ready to accompany customers on their long-term growth journey."
    },
    {
      icon: Lightbulb,
      title: "Technology - Innovation",
      description: "Nolimit applies technology to system management, helping customers easily use, track progress, and get comprehensive service reports to optimize cumbersome machinery."
    },
    {
      icon: Users,
      title: "Relationships - Customers",
      description: "Nolimit is not just a business partner, but also a companion unit. We always put customer interests first."
    },
    {
      icon: FileText,
      title: "Reporting - Reconciliation",
      description: "Nolimit always provides accurate and optimal reports. We alert potential fluctuations that may arise, helping customers take timely countermeasures."
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl floating-animation"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-purple-600 font-medium mb-6 border border-white/30">
            <span>OUR VALUES</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AdsManagement Core Values
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 card-hover shadow-xl">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg glow-effect group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 