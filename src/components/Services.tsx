import { Globe, Share2, Search, Facebook } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Facebook,
      title: "Facebook Ads",
      description: "Strategic Facebook advertising campaigns to reach your target audience and drive conversions.",
      number: "01"
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Modern, responsive websites that showcase your brand and drive business growth.",
      number: "02"
    },
    {
      icon: Search,
      title: "SEO Audits & Strategy",
      description: "Comprehensive SEO strategies to improve your search rankings and organic traffic.",
      number: "03"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Complete social media management to build your brand presence across all platforms.",
      number: "04"
    }
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-3 text-purple-600 font-medium mb-4">
            <span>OUR SERVICES</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Solutions for Every Customer
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl card-hover glow-effect-hover border border-purple-100">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 gradient-bg rounded-full glow-effect floating-animation">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-3xl font-bold text-gradient">{service.number}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 