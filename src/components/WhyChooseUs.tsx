import { Target, Crown, Settings } from 'lucide-react'

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Target,
      title: "Leverage AdsManagement's Resources",
      description: "Customers will have access to all management tools and account operation tools within AdsManagement's ecosystem."
    },
    {
      icon: Crown,
      title: "Use Exclusive Resources",
      description: "AdsManagement is a strategic partner of social media platforms like Facebook, Google, TikTok... We will share special privileges regarding policies, accounts, and appeals with customers."
    },
    {
      icon: Settings,
      title: "Support Management System Building",
      description: "AdsManagement accompanies partners to customize account management systems according to the specific operation methods of customer businesses, helping customers easily streamline and perfect their systems."
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-black/30 backdrop-blur-xl relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-800/20 via-transparent to-purple-500/30"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl floating-animation"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium mb-6 border border-white/30">
            <span>WHY CHOOSE US</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            When You Become 
            <span className="block text-yellow-300 mt-2">AdsManagement&apos;s Partner</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 card-hover shadow-2xl">
                <div className="relative mb-6 inline-block">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-xl glow-effect group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 