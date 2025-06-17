import { Calculator, TrendingUp, Target, Crown } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PricingPage() {
  const pricingFactors = [
    {
      name: "Advertising Budget",
      description: "Your monthly advertising spend determines the scope of campaigns",
      icon: TrendingUp,
      gradient: "from-cyan-400 to-blue-600",
      examples: [
        "$300-1,500 per month",
        "$1,500-6,000 per month", 
        "$6,000+ per month"
      ]
    },
    {
      name: "Marketing Channels",
      description: "Platforms and channels you want to utilize for your campaigns",
      icon: Target,
      gradient: "from-purple-400 to-pink-600",
      examples: [
        "Facebook & Instagram Ads",
        "Google Ads & YouTube",
        "TikTok & LinkedIn Ads",
        "Multi-Platform Integration"
      ]
    },
    {
      name: "Service Scope",
      description: "Level of management and additional services required",
      icon: Crown,
      gradient: "from-orange-400 to-red-600",
      examples: [
        "Ads Management Only",
        "Including Content Creation",
        "Including Landing Page Design",
        "Full Digital Marketing Suite"
      ]
    }
  ]

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
                    <Calculator className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-100 font-medium text-sm tracking-wider uppercase">Custom Pricing</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                <span className="block">Pricing Based on</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Your Specific Needs
                </span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                We offer{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                  flexible pricing solutions
                </span>
                {" "}tailored to your budget and business requirements. No hidden fees, complete transparency.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Factors */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pricing Depends on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  3 Key Factors
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Every business is unique. Our pricing reflects the specific services and scale your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {pricingFactors.map((factor, index) => {
                const IconComponent = factor.icon
                return (
                  <div key={index} className="group">
                    <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                      <div className={`w-16 h-16 bg-gradient-to-r ${factor.gradient} rounded-xl flex items-center justify-center mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{factor.name}</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{factor.description}</p>
                      <div className="space-y-3">
                        {factor.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${factor.gradient} rounded-full`}></div>
                            <span className="text-gray-300">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* How It Works */}
            <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  How Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Pricing Works
                  </span>
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    1
                  </div>
                  <h4 className="text-white font-semibold mb-2">Consultation</h4>
                  <p className="text-gray-400 text-sm">We analyze your business needs, goals, and current marketing situation</p>
                </div>
                
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    2
                  </div>
                  <h4 className="text-white font-semibold mb-2">Custom Quote</h4>
                  <p className="text-gray-400 text-sm">Based on your requirements, we create a tailored pricing proposal</p>
                </div>
                
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    3
                  </div>
                  <h4 className="text-white font-semibold mb-2">Flexible Scaling</h4>
                  <p className="text-gray-400 text-sm">Adjust services and pricing as your business grows and evolves</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Frequently Asked{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Questions
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Why don't you have fixed pricing?",
                  answer: "Every business has unique needs, budgets, and goals. Fixed pricing often means paying for services you don't need or missing out on services that could benefit you. Our custom approach ensures you get exactly what your business requires."
                },
                {
                  question: "Are there any hidden fees?",
                  answer: "Absolutely not! We believe in complete transparency. All costs including management fees, additional services, and any third-party expenses are clearly outlined in your custom proposal before we begin."
                },
                {
                  question: "Can I change my service level later?",
                  answer: "Yes! We understand that businesses evolve. You can upgrade, downgrade, or modify your services at any time. Changes will be reflected in your next billing cycle with prorated adjustments."
                },
                {
                  question: "What's the minimum budget to get started?",
                  answer: "We work with businesses of all sizes. For small businesses, we typically recommend a minimum advertising budget of $300/month plus management fees. For smaller budgets, we offer consultation to find the best approach for your situation."
                },
                {
                  question: "Do you provide free quotes?",
                  answer: "Yes! We offer free consultations and detailed proposals. This includes a preliminary business analysis to ensure you receive the most suitable package for your specific needs and goals."
                },
                {
                  question: "How quickly can we get started?",
                  answer: "Once you approve our proposal, we can typically begin setup within 3-5 business days. This includes account setup, initial strategy development, and campaign preparation."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Get Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Custom Quote?
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Get a free consultation and detailed proposal tailored specifically to your business needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 border border-cyan-400/50">
                    <div className="flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      <span className="tracking-wider">Get Free Quote</span>
                    </div>
                  </div>
                </button>
                <button className="relative bg-black/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-white/10">
                  <span className="tracking-wider">Schedule Consultation</span>
                </button>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  💡 <strong className="text-white">No obligation</strong> • Free consultation • Detailed proposal within 24 hours
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 