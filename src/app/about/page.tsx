import { Users, Target, Award, Rocket, Sparkles, Zap } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "2+", label: "Years Experience", icon: Award },
    { number: "95%", label: "Success Rate", icon: Target },
    { number: "24/7", label: "Support", icon: Rocket }
  ]

//   const team = [
//     {
//       name: "Alex Chen",
//       position: "CEO & Founder",
//       expertise: "Digital Strategy & AI Innovation",
//       gradient: "from-cyan-400 to-blue-600"
//     },
//     {
//       name: "Sarah Kim",
//       position: "Head of Marketing",
//       expertise: "Facebook Ads & Social Media",
//       gradient: "from-purple-400 to-pink-600"
//     },
//     {
//       name: "Mike Johnson",
//       position: "Lead Developer",
//       expertise: "Web Development & Analytics",
//       gradient: "from-green-400 to-emerald-600"
//     }
//   ]

  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8 group">
                <div className="relative bg-black/40 backdrop-blur-xl rounded-full px-6 py-3 border border-cyan-400/30">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-100 font-medium text-sm tracking-wider uppercase">About Us</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                <span className="block">Innovating Digital</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Marketing Solutions
                </span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                AdsManagement is a leading{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                  AI-powered digital agency
                </span>
                {" "}dedicated to transforming businesses through innovative marketing strategies and cutting-edge technology.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Mission */}
              <div className="group">
                <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      Mission
                    </span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    To empower businesses with innovative AI-driven digital marketing solutions that drive sustainable growth and deliver measurable results in an ever-evolving digital landscape.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="group">
                <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      Vision
                    </span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    To become the global leader in AI-powered digital marketing, revolutionizing how businesses connect with their audiences and achieve unprecedented success in the digital era.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Digital Presence?
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trust AdsManagement for their digital marketing success
              </p>
              <button className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 border border-cyan-400/50">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 group-hover:animate-bounce" />
                    <span className="tracking-wider">Start Your Project</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 