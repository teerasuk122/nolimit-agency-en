import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Sparkles, Shield, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      contact: "ceo@adsmanagements.com",
      action: "mailto:ceo@adsmanagements.com",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team directly",
      contact: "042110357",
      action: "tel:+6642110357",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available 9 AM - 6 PM",
      action: "#",
      gradient: "from-green-400 to-emerald-600"
    }
  ]

  const offices = [
    {
      city: "Udon Thani",
      address: "376 Moo 15, Samprao Subdistrict, Mueang Udon Thani District, Udon Thani Province 41000, Thailand",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM",
      type: "Headquarters",
      gradient: "from-cyan-400 to-blue-600"
    }
  ]

  const commitments = [
    {
      icon: Shield,
      title: "Agency Accounts",
      description: "Platform partners with verified status",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: CheckCircle,
      title: "Information Security",
      description: "Advertising information security guaranteed",
      gradient: "from-blue-400 to-cyan-600"
    },
    {
      icon: Clock,
      title: "Clear Origins",
      description: "Transparent account origins and processes",
      gradient: "from-purple-400 to-pink-600"
    }
  ]

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 2-4 hours during business hours, and within 24 hours on weekends."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer free 30-minute consultation calls to discuss your business needs and how we can help you grow."
    },
    {
      question: "What information should I include in my inquiry?",
      answer: "Please include your business type, current marketing challenges, monthly budget range, and your specific goals."
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
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-100 font-medium text-sm tracking-wider uppercase">Get in Touch</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                <span className="block">Let&apos;s Grow Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Business Together
                </span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                Ready to take your digital marketing to the next level? Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                  expert team
                </span>
                {" "}is here to help you achieve your business goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                    Send us a{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      Message
                    </span>
                  </h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                        placeholder="+66 xx-xxx-xxxx"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Monthly Marketing Budget
                      </label>
                      <select className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300">
                        <option value="">Select Budget Range</option>
                        <option value="under-15000">Under ฿15,000</option>
                        <option value="15000-50000">฿15,000 - ฿50,000</option>
                        <option value="50000-150000">฿50,000 - ฿150,000</option>
                        <option value="150000-300000">฿150,000 - ฿300,000</option>
                        <option value="over-300000">฿300,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Services Interested In
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Facebook Ads', 'Google Ads', 'Line Ads', 'TikTok Ads', 'Content Creation', 'Analytics'].map((service) => (
                          <label key={service} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-cyan-600 bg-black/20 border-white/20 rounded focus:ring-cyan-400 focus:ring-2"
                            />
                            <span className="text-gray-300 text-sm">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <textarea
                        rows={5}
                        required
                        className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                        placeholder="Tell us about your business goals, target audience, and current challenges..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 border border-cyan-400/50">
                        <div className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5 group-hover:animate-bounce" />
                          <span className="tracking-wider">Send Message</span>
                        </div>
                      </div>
                    </button>

                    <p className="text-center text-gray-400 text-sm">
                      We&apos;ll get back to you within 2-4 hours during business hours
                    </p>
                  </form>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="order-1 lg:order-2">
                <div className="space-y-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                    Get in{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      Touch
                    </span>
                  </h2>

                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon
                    return (
                      <a
                        key={index}
                        href={method.action}
                        className="block group"
                      >
                        <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                                {method.title}
                              </h3>
                              <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                              <p className={`text-transparent bg-clip-text bg-gradient-to-r ${method.gradient} font-medium`}>
                                {method.contact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    )
                  })}

                  {/* Our Commitments */}
                  <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mt-8">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Our Commitments
                    </h3>
                    <div className="space-y-4">
                      {commitments.map((commitment, index) => {
                        const IconComponent = commitment.icon
                        return (
                          <div key={index} className="flex items-start gap-3">
                            <div className={`w-8 h-8 bg-gradient-to-r ${commitment.gradient} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium text-sm">{commitment.title}</h4>
                              <p className="text-gray-400 text-xs">{commitment.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Office
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Visit us at our office or schedule a virtual meeting
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {offices.map((office, index) => (
                <div key={index} className="group">
                  <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${office.gradient} rounded-xl flex items-center justify-center`}>
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-white">{office.city}</h3>
                          <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${office.gradient} text-white`}>
                            {office.type}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">{office.address}</p>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Clock className="w-4 h-4" />
                          {office.hours}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button className="group relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-r ${office.gradient} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                        <div className={`relative bg-gradient-to-r ${office.gradient} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-white/20`}>
                          <span className="tracking-wider">Get Directions</span>
                        </div>
                      </button>
                      <button className="relative bg-black/20 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10">
                        <span className="tracking-wider">Schedule Visit</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Quick{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Questions
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
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
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Get Started?
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Don&apos;t wait! The sooner we start, the sooner you&apos;ll see results. Let&apos;s schedule a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 border border-cyan-400/50">
                    <span className="tracking-wider">Schedule Free Call</span>
                  </div>
                </button>
                <button className="relative bg-black/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-white/10">
                  <span className="tracking-wider">View Our Work</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 