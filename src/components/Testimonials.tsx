import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Johannes Times",
      position: "CEO of REx Company", 
      content: "Renting advertising accounts at AdsManagement costs only 3% competitive combined with a convenient topup management system, helping me easily manage a team of 100+ marketers.",
      rating: 5
    },
    {
      name: "Kelley",
      position: "Owner of DEF Corp.",
      content: "AdsManagement has been accompanying us for 2 years. AdsManagement has made tremendous contributions to guidance, account optimization, and building sustainable long-term account systems.",
      rating: 5
    },
    {
      name: "Anna Duong", 
      position: "Marketing Director at Serra Inc.",
      content: "The spa and beauty industry requires extremely high quality standards. Very few agency units can provide high-quality account quantities like AdsManagement.",
      rating: 5
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-100 via-white to-blue-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl floating-animation"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-purple-600 font-medium mb-6 border border-white/30">
            <span>TESTIMONIALS</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              What Customers Say About AdsManagement
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 card-hover shadow-xl border border-white/20">
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg glow-effect">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-gray-700 leading-relaxed mb-8 italic text-lg">
                &quot;{testimonial.content}&quot;
              </p>
              
              {/* Author Info */}
              <div className="border-t border-white/20 pt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-purple-600 font-medium">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 