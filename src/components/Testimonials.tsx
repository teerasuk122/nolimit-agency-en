import { Star, Quote, Users } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Johannes Times",
      position: "CEO of REx Company", 
      content: "Renting advertising accounts at AdsManagement costs only 3% competitive combined with a convenient topup management system, helping me easily manage a team of 100+ marketers.",
      rating: 5,
      avatar: "J"
    },
    {
      name: "Kelley",
      position: "Owner of DEF Corp.",
      content: "AdsManagement has been accompanying us for 2 years. AdsManagement has made tremendous contributions to guidance, account optimization, and building sustainable long-term account systems.",
      rating: 5,
      avatar: "K"
    },
    {
      name: "Anna Duong", 
      position: "Marketing Director at Serra Inc.",
      content: "The spa and beauty industry requires extremely high quality standards. Very few agency units can provide high-quality account quantities like AdsManagement.",
      rating: 5,
      avatar: "A"
    }
  ]

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Simple Badge */}
          <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-sm rounded-full px-6 py-3 text-cyan-100 font-medium mb-8 border border-white/10">
            <Users className="w-4 h-4 text-cyan-400" />
            <span className="tracking-wider uppercase text-sm">Testimonials</span>
          </div>
          
          {/* Title */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            What Our Clients Say About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              AdsManagement
            </span>
          </h3>
          
          {/* Subtitle */}
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real experiences from satisfied customers who trust our digital marketing solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative h-full bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center mb-6 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-gray-300 leading-relaxed mb-8 text-base">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                
                {/* Author Info */}
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-lg">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-cyan-400 font-medium text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-black/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">2+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 